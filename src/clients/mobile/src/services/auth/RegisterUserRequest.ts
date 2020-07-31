export default class RegisterUserRequest {
    constructor(item: any = {}) {
        this.name = item.name;
        this.email = item.email;
        this.password= item.password;
        this.confirmPassword = item.confirmPassword;
    }

    name: string;
    email: string;
    password: string;
    confirmPassword: string;
}
