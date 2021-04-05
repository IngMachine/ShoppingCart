import { Action } from '@ngrx/store';
import { Cart } from '../../carts/interface/cart.interface';

export const SET_ORDER_CARTS = '[Cart-Products] Set Cart Products';
export const UN_SET_ORDER_CARTS = '[Cart-Products] UNSet Cart Products';

export class SelectAllOrderCart implements Action {
  readonly type = SET_ORDER_CARTS;
  constructor(public carts: Cart[]) {}
}

export class UnSetOrderCart implements Action {
  readonly type = UN_SET_ORDER_CARTS;
}


export type acciones = SelectAllOrderCart | UnSetOrderCart;
