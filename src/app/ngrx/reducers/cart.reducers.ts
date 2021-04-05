import * as fromCart from '../actions/cart.actions';
import { Product } from '../../products/interface/product';

export enum STATUS {completed, pending}

export interface ProductStateCart{
  products: Product[];
  status: STATUS;
}


const initState: ProductStateCart ={
  products: [],
  status: STATUS.pending
}


export function cartProdcutsReducer(state = initState, action: fromCart.acciones ): ProductStateCart {
  switch ( action.type ) {
    case fromCart.SET_CART_PRODUCTS:
      return {
        products: [...action.products],
        status: STATUS.pending,
      };
    case fromCart.UN_SET_CART_PRODUCTS:
      return{
        products: [],
        status: STATUS.pending
      };
    case fromCart.CHANGE_CAR_STATUS:
      return{
        products: [],
        status: STATUS.completed
      };

      default:
        return state;
  }
}
