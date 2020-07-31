export class User {
    token: string;
    name: string;
    email: string;
    familyName: string;
    givenName: string;
    emailVerified: boolean;

    constructor(item: any = {}) {
        this.token = item.token;
        this.name = item.name;
        this.email =  item.email;
        this.familyName = item.famlyName;
        this.givenName = item.giveName;
        this.emailVerified = item.emailVerified;
    }
}
