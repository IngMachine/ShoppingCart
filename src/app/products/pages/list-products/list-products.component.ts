import { Component, OnInit } from '@angular/core';

import { Store } from '@ngrx/store';
import { AppState } from 'src/app/ngrx/app.reducer';
import { SelectItem, MenuItem, MessageService } from 'primeng/api';

import { ProductService } from '../../services/product.service';
import { CartService } from '../../../carts/service/cart.service';

import { Product } from './../../interface/product';
import { AuthService } from '../../../auth/service/auth.service';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { DeactivateLoadingAction } from '../../../ngrx/actions/ui-loading.actions';

@Component({
  selector: 'app-list-products',
  templateUrl: './list-products.component.html',
  styleUrls: ['./list-products.component.scss'],
  providers:[MessageService]
})
export class ListProductsComponent implements OnInit {

  subscriptionUI: Subscription;

  products!: Product[];
  productsCart: Product[] = [];

  sortOptions!: SelectItem[];

  sortOrder!: number;

  sortField!: string;

  items!: MenuItem[];

  home!: MenuItem;

  loading: boolean;

  constructor(
    private productService: ProductService,
    private cartService: CartService,
    private messageService: MessageService,
    private authService: AuthService,
    private router: Router,
    private store: Store<AppState>
    ) {}

  ngOnInit(): void {

    this.subscriptionUI = this.store.select('uiLoading')
              .subscribe( uiLoading => this.loading = uiLoading.isLoading );

    this.items = [
      {label: 'Products'},
    ];

    this.home = {icon: 'pi pi-home', routerLink: '/'};
    this.productService.getProducts().subscribe((data) =>{
      this.products = data;
      this.store.dispatch(new DeactivateLoadingAction() );
    } );

    this.sortOptions = [
      { label: 'Price High to Low', value: '!price' },
      { label: 'Price Low to High', value: 'price' },
    ];
  }

  onSortChange(event: any): void {
    const value = event.value;

    if (value.indexOf('!') === 0) {
      this.sortOrder = -1;
      this.sortField = value.substring(1, value.length);
    } else {
      this.sortOrder = 1;
      this.sortField = value;
    }
  }

  showSuccess(product: Product) {
    this.messageService.add({severity:'success', summary: 'Product added to cart', detail: `Name: ${product.name} | Price: $${product.price}`});
}

  addCart(product: Product){
    this.authService.isAuth()
                    .subscribe( auth => {
                      if ( auth ){
                        this.showSuccess(product);
                        this.cartService.addCart(product);
                      } else {
                        this.router.navigate(['/auth/login']);      
                      }
                    })
  }

}
