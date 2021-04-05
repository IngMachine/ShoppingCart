import { ActionReducerMap } from '@ngrx/store';

import * as fromUILoading from './reducers/ui-loading.reducers';
import * as fromAuth from './reducers/auth.reducers';
import * as fromCartProducts from './reducers/cart.reducers';
import * as fromOrderCarts from './reducers/order.reducers';




export interface AppState{
    uiLoading: fromUILoading.UIState;
    auth: fromAuth.AuthState;
    cartProducts: fromCartProducts.ProductStateCart;
    orderCarts: fromOrderCarts.OrderStateCart
}

export const appReducers: ActionReducerMap<AppState> = {
    uiLoading: fromUILoading.uiLoadingReducer,
    cartProducts: fromCartProducts.cartProdcutsReducer,
    auth: fromAuth.authReducer,
    orderCarts: fromOrderCarts.cartProdcutsReducer
};
