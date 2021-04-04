import * as fromUILoading from '../actions/ui-loading.actions';
import { actions } from '../actions/ui-loading.actions';

export interface UIState {
    isLoading: boolean;
}

const initState: UIState = {
    isLoading: false
};

export function uiLoadingReducer( state = initState, action: fromUILoading.actions): UIState {
    switch ( action.type ){
        case fromUILoading.ACTIVATE_LOADING:
            return {
                isLoading: true
            };
        case fromUILoading.DEACTIVATE_CHARGING:
            return {
                isLoading: false
            };
        default:
            return state;
    }
}