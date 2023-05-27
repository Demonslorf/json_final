export class Usuario{
    id?: String;
    User: String;
    Password: String;

    constructor( User: String, Password: String){
        this.User = User;
        this.Password = Password;
    }
}