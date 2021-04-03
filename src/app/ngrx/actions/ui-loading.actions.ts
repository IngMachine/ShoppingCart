import { Action } from '@ngrx/store';

export const ACTIVATE_LOADING = '[UI LOADING] Loading';
export const DEACTIVATE_CHARGING = '[UI LOADING] End of charge';

export class ActivateLoadingAction implements Action {
    readonly type = ACTIVATE_LOADING;
}

export class DeactivateLoadingAction implements Action {
    readonly type = DEACTIVATE_CHARGING;
}

export type actions = ActivateLoadingAction | DeactivateLoadingAction;
