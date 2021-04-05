import * as fromCart from '../actions/cart.actions';
import { Product } from '../../products/interface/product';


export interface ProductStateCart{
  products: Product[];
}

const initState: ProductStateCart ={
  products: []
}


export function cartProdcutsReducer(state = initState, action: fromCart.acciones ): ProductStateCart {
  switch ( action.type ) {
    case fromCart.CartsTypesActyon.SET_CART_PRODUCTS:
      return {
        products: [...action.products]
      };

    case fromCart.CartsTypesActyon.UN_SET_CART_PRODUCTS:
      return{
        products: []
      }

      default:
        return state;
  }
}
