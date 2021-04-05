import { Product } from '../../products/interface/product';
import { Action } from '@ngrx/store';

export enum CartsTypesActyon {
  SET_CART_PRODUCTS = '[Order-Carts] Set Order Products',
  UN_SET_CART_PRODUCTS = '[Order-Carts] Un Set Order Products'
}

export class SelectAllProductCart implements Action {
  readonly type = CartsTypesActyon.SET_CART_PRODUCTS;
  constructor(public products: Product[]) {}
}

export class UnsetCartProdutsAction implements Action {
  readonly type = CartsTypesActyon.UN_SET_CART_PRODUCTS;
}


export type acciones = SelectAllProductCart | UnsetCartProdutsAction;
