export default class BasicLoginRequest {
    email: string;
    password: string;
    constructor(item: any = {}) {
        this.email = item.email;
        this.password = item.password;
    }
}
