export class User {

    public username: string;
    public email: string;
    public uid: string;

    constructor( obj: DataObj) {
        this.username = obj && obj.username || null;
        this.email = obj && obj.email || null;
        this.uid = obj && obj.uid || null;
    }
}


export interface DataObj {
    uid: string;
    email: string;
    username: string;
}
