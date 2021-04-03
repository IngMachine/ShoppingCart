import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CartsRoutingModule } from './carts-routing.module';
import { CurrentCartComponent } from './pages/current-cart/current-cart.component';
import { ListCartComponent } from './pages/list-cart/list-cart.component';


@NgModule({
  declarations: [CurrentCartComponent, ListCartComponent],
  imports: [
    CommonModule,
    CartsRoutingModule
  ]
})
export class CartsModule { }
