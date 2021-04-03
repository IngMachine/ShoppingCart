export class User {

    public username: string;
    public email: string;
    public uid: string;

    constructor(
        username: string,
        email: string,
        uid: string
    ) {
        this.username = username;
        this.email = email;
        this.uid = uid;
    }
}
