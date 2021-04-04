import { Action } from '@ngrx/store';
import { User } from '../../auth/models/user.model';


export const SET_USER = '[AUTH] SET USER';

export class SetUserAction implements Action {
    readonly type = SET_USER;

    constructor( public user: User){}
}

export type actions = SetUserAction;
