import * as fromUILoading from '../actions/ui-loading.actions';
import { actions } from '../actions/ui-loading.actions';

export interface State {
    isLoading: boolean;
}

const initState: State = {
    isLoading: false
};

export function uiLoadingReducer( state = initState, action: fromUILoading.actions): State {
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