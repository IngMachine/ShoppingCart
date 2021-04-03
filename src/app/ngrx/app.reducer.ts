import { ActionReducerMap } from '@ngrx/store';
import * as fromUILoading from './reducers/ui-loading.reducers';
import { uiLoadingReducer } from './reducers/ui-loading.reducers';

export interface AppState{
    uiLoading: fromUILoading.State
}

export const appReducers: ActionReducerMap<AppState> = {
    uiLoading: fromUILoading.uiLoadingReducer
};
