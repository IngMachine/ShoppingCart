import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListCartComponent } from './pages/list-cart/list-cart.component';
import { CurrentCartComponent } from './pages/current-cart/current-cart.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        component: ListCartComponent
      },
      {
        path: 'current-cart',
        component: CurrentCartComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CartsRoutingModule { }
