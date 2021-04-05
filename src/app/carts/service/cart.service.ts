import { Injectable } from '@angular/core';
import { AuthService } from './../../auth/service/auth.service';

import { AngularFirestore } from '@angular/fire/firestore';

import { Store } from '@ngrx/store';
import { AppState } from 'src/app/ngrx/app.reducer';
import { SelectAllProductCart } from './../../ngrx/actions/cart.actions';
import { SelectAllOrderCart } from './../../ngrx/actions/order.actions';


import { filter, map } from 'rxjs/operators';
import { Subscription } from 'rxjs';

import { Product } from './../../products/interface/product';
import { User } from './../../auth/models/user.model';
import { Cart } from '../interface/cart.interface';
import { ActivateLoadingAction } from '../../ngrx/actions/ui-loading.actions';


@Injectable({
  providedIn: 'root'
})
export class CartService {

  cartsItemsSubscription: Subscription = new Subscription();
  cartsListernetSubcription: Subscription = new Subscription();


private url = 'https://shopping-cart-708cb-default-rtdb.firebaseio.com/';

  products: Product[] = [];
  cart: Cart;
  carts: Cart[] = [];
  constructor(
    private store: Store<AppState>,
    private af: AngularFirestore,
    public authService: AuthService
  ) {}

  addCart(product: Product){
    const user = this.authService.getUser();
    this.af.doc(`${user.uid}/Cart/`)
           .collection('products')
           .add({...product});
  }

  initCartsListener(): void {
    this.cartsListernetSubcription = this.store.select('auth')
                                            .pipe(
                                              filter( auth => auth.user != null)
                                            )
                                            .subscribe(
                                              auth => this.cartCurrentItems( auth.user.uid )
                                            );
  }

  private cartCurrentItems( uid: string ): void {
    this.cartsItemsSubscription = this.af.collection(`${ uid }/Cart/products`)
                                                  .snapshotChanges()
                                                  .pipe(
                                                    map( docData => {
                                                      return docData.map( (doc: any) => {
                                                        return {
                                                          id: doc.payload.doc.id,
                                                          ...doc.payload.doc.data()
                                                        };
                                                      });
                                                    })
                                                    )
                                                    .subscribe( (coleccion: any[])  => {
                                                      this.store.dispatch( new SelectAllProductCart( coleccion ) );
                                                    });
  }

  deleteProductCart(product: Product){
    const user: User = this.authService.getUser();
    return this.af.doc(`${user.uid}/Cart/products/${product.id}`).delete();
  }

  deleteCart(){
    const user: User = this.authService.getUser();
    this.store.select('cartProducts').subscribe(
      data => {
        this.products = data.products;
      }
    )
    this.products.forEach(element => {
      this.af.doc(`${user.uid}/Cart/products/${element.id}`).delete();
    });
  }

  ordeCart(products : Product[]){
    return this.orderAddCart(products);
  }

  private orderAddCart(products: Product[]){
    const user = this.authService.getUser();

    this.cart = {
      id: user.uid,
      products: products,
      quantity: products.length,
      state: false
    }
    return this.af.doc(`${user.uid}/order/`)
    .collection('carts').add({...this.cart});
  }

  getListCarts(){
    return this.store.select('auth')
    .pipe(
      filter( auth => auth.user != null )
    )
    .subscribe( auth => {

      this.af.collection(`${auth.user.uid}/order/carts`)
              .snapshotChanges()
              .pipe(
                map( docData => {
                  return docData.map(( doc )=> {
                    return{
                      id: doc.payload.doc.id,
                      ... doc.payload.doc.data() as {}
                    }
                  })
                })

      )
      .subscribe( (colleccion: any[])=>{
        this.carts = colleccion;
        this.store.dispatch( new SelectAllOrderCart(colleccion));
      } )
    })
  };

  listCarts(){
    return this.carts;
  }

}
