import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Store } from '@ngrx/store';
import { AppState } from '../../../ngrx/app.reducer';

import { MessageService, MenuItem } from 'primeng/api';
import { CartService } from '../../service/cart.service';

import { Product } from './../../../products/interface/product';
import { DeactivateLoadingAction } from '../../../ngrx/actions/ui-loading.actions';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-current-cart',
  templateUrl: './current-cart.component.html',
  styleUrls: ['./current-cart.component.scss'],
  providers:[MessageService]
})
export class CurrentCartComponent implements OnInit {

  items!: MenuItem[];

  home!: MenuItem;

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
    console.log(product);
    this.cartService.deleteProductCart(product)
    .then(
      res => {
        this.showInfo(product);
      }
    ).catch(
      err => {
        console.log('NO se elimino el producto');
        console.log(err);
      }
    )
  };

  ordenCart(){
    this.cartService.ordeCart(this.products);
    this.showSuccess();
    this.route.navigate(['/orders']);
    this.cartService.deleteCart();
  }


  showSuccess() {
    this.messageService.add({severity:'success', summary: 'Ordered cart'});
}

  showInfo(product: Product) {
    this.messageService.add({severity:'info', summary: 'Product removed from cart', detail: `Name: ${product.name} | Price: $${product.price}`});
}

}
