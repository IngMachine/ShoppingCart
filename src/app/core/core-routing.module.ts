import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CoreComponent } from './pages/core/core.component';
import { AuthGuard } from '../auth/guards/auth.guard';

const routes: Routes = [
  {
    path: '',
    component: CoreComponent,
    children: [
      {
        path: 'home',
        loadChildren: () => import('../home/home.module').then( m => m.HomeModule )
      },
      {
        path: 'products',
        loadChildren: () => import('../products/products.module').then( m => m.ProductsModule )
      },
      {
        path: 'carts',
        loadChildren: () => import('../carts/carts.module').then( m => m.CartsModule )
      },
      {
        path: 'orders',
        loadChildren: () => import('../orders/orders.module').then( m => m.OrdersModule ),
        canLoad: [AuthGuard]
      },
      {
        path: '**',
        redirectTo: 'home'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CoreRoutingModule { }
