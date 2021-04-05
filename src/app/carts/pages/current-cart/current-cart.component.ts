import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Store } from '@ngrx/store';
import { AppState } from '../../../ngrx/app.reducer';

import { MessageService, MenuItem } from 'primeng/api';
import { CartService } from '../../service/cart.service';

import { Product } from './../../../products/interface/product';
import { DeactivateLoadingAction } from '../../../ngrx/actions/ui-loading.actions';
import { Subscription } from 'rxjs';
import { ChangeCarStatuAction } from '../../../ngrx/actions/cart.actions';

@Component({
  selector: 'app-current-cart',
  templateUrl: './current-cart.component.html',
  styleUrls: ['./current-cart.component.scss'],
  providers:[MessageService]
})
export class CurrentCartComponent implements OnInit {

  items!: MenuItem[];

  home!: MenuItem;

  estado: boolean = false;

  products: Product[] = [];
  constructor(
    private cartService: CartService,
    private store: Store<AppState>,
    private messageService: MessageService,
    private route: Router
  ) { }

  ngOnInit(): void {

    this.home = {icon: 'pi pi-home', routerLink: '/'};

    this.items = [{label: 'Cart'}]
    this.getProducts();

  }

  getProducts(){
    this.store.select('cartProducts')
    .subscribe(
      data => {
        this.products = data.products;
      }
    )
  }

  deleteProduct( product: Product){
    this.cartService.deleteProductCart(product)
    .then(
      () => {
        this.showInfo(product);
      }
    ).catch(
      err => {
        console.log(err);
      }
    )
  };

  ordenCart(){
    if( this.products.length === 0 ){
      this.showError();
    } else{
        this.cartService.ordeCart(this.products);
        this.showSuccess();
        this.route.navigate(['/orders']);
        this.cartService.deleteCart();  
        this.store.dispatch( new ChangeCarStatuAction() );
    }
  }


  showSuccess() {
    this.messageService.add({severity:'success', summary: 'Ordered cart'});
  }

  showError() {
    this.messageService.add({severity:'warn', summary: 'No Product', detail: 'Add a product to cart'});
  }

  showInfo(product: Product) {
    this.messageService.add({severity:'info', summary: 'Product removed from cart', detail: `Name: ${product.name} | Price: $${product.price}`});
}

}
