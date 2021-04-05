import { AppState } from 'src/app/ngrx/app.reducer';
import { Store } from '@ngrx/store';
import { Component, OnInit } from '@angular/core';
import { CartService } from '../../../carts/service/cart.service';
import { Cart } from '../../../carts/interface/cart.interface';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss']
})
export class OrdersComponent implements OnInit {
  items: MenuItem[];
  home: MenuItem;
  carts : Cart[] = [];
  constructor(
    private cartService: CartService,
    private store: Store<AppState>
  ) { }

  ngOnInit(): void {
    this.items = [{label: 'Cart'}];
    this.home = {icon: 'pi pi-home', routerLink: '/'};
    this.store.select('orderCarts')
    .subscribe(
      data => {
        this.carts = data.carts;
      }
    )
    console.log(this.carts);
  }

}
