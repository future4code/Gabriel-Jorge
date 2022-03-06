export enum ROLES {
    NORMAL = "NORMAL",
    ADMIN = "ADMIN"
}

export class User {
    private name: string
    private email: string
    private senha: string
    // private roles: string

    constructor (name: string, email: string, senha: string /*,roles:ROLES*/){
        this.name = name 
        this.email = email 
        this.senha = senha 
        // this.roles = roles
    }
    static toUserModel(data: any): User {

        return new User(data.nome, data.email, data.senha)
    }
}
