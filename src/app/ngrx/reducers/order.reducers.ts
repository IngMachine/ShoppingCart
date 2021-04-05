import * as fromOrder from '../actions/order.actions';
import { Cart } from 'src/app/carts/interface/cart.interface';


export interface OrderStateCart{
  carts: Cart[];
}

const initState: OrderStateCart = {
  carts: []
}

export function cartProdcutsReducer(state = initState, action: fromOrder.acciones ): OrderStateCart {
  switch ( action.type ) {
    case fromOrder.CartsTypesActyon.SET_ORDER_CARTS:
      return {
        carts: [...action.carts]
      };

      default:
        return state;
  }
}
