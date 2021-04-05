import { Action } from '@ngrx/store';
import { Cart } from '../../carts/interface/cart.interface';

export enum CartsTypesActyon {
  SET_ORDER_CARTS = '[Cart-Products] Set Cart Products',
  UN_SET_ORDER_CARTS = '[Cart-Products] Set Cart Products'
}

export class SelectAllOrderCart implements Action {
  readonly type = CartsTypesActyon.SET_ORDER_CARTS;
  constructor(public carts: Cart[]) {}
}

export class UnsetCartProdutsAction implements Action {
  readonly type = CartsTypesActyon.UN_SET_ORDER_CARTS;
}


export type acciones = SelectAllOrderCart;
