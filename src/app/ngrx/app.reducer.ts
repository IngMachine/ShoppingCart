import { ActionReducerMap } from '@ngrx/store';
import * as fromUILoading from './reducers/ui-loading.reducers';
import * as fromAuth from './reducers/auth.reducers';

export interface AppState{
    uiLoading: fromUILoading.UIState;
    auth: fromAuth.AuthState;
}

export const appReducers: ActionReducerMap<AppState> = {
    uiLoading: fromUILoading.uiLoadingReducer,
    auth: fromAuth.authReducer
};
