import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CartsRoutingModule } from './carts-routing.module';

import { CurrentCartComponent } from './pages/current-cart/current-cart.component';

import { PrimeNgModule } from '../prime-ng/prime-ng.module';


@NgModule({
  declarations: [CurrentCartComponent],
  imports: [
    CommonModule,
    CartsRoutingModule,
    PrimeNgModule
  ]
})
export class CartsModule { }
