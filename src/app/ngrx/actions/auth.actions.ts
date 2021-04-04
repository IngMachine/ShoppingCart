import { Action } from '@ngrx/store';
import { User } from '../../auth/models/user.model';


export const SET_USER = '[AUTH] SET USER';
export const UNSET_USER = '[AUTH] UNSET USER';

export class SetUserAction implements Action {
    readonly type = SET_USER;

    constructor( public user: User){}
}

export class UnSetUserAction implements Action {
    readonly type = UNSET_USER;

}

export type actions = SetUserAction | UnSetUserAction ;
