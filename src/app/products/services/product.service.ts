import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from '../interface/product';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { ActivateLoadingAction } from '../../ngrx/actions/ui-loading.actions';
import { AppState } from 'src/app/ngrx/app.reducer';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private url: string =
    'https://shopping-cart-708cb-default-rtdb.firebaseio.com/';

  constructor(
      private http: HttpClient,
      private store: Store<AppState>
    ) {}

  getProductsSmall(): Observable<Product[]> {
      this.store.dispatch(new ActivateLoadingAction());
      return this.http.get<Product[]>(`${this.url}productsSmall/data.json`);
  }

  getProducts(): Observable<Product[]> {
    this.store.dispatch(new ActivateLoadingAction());
    return this.http.get<Product[]>(`${this.url}products/data.json`);
  }
}
