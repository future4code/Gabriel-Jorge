import { User } from "../Entidades/User";
import { DataBase } from "./DataBase"

export class UserDataBase extends DataBase {
    public async creteUser(user: User): Promise<void>{
        try{
            await DataBase.connection("lbn_user").insert({
                id: user.getId(),
                name: user.getName(),
                email:user.getEmail(),
                password: user.getPassword(),
                role: user.getRole()
            })

        }catch(error){
            throw new error(error.message || error.sqlMessage)
        }
    }


    public async findUserByEmail( email : string ): Promise<User> {
        try{
            const user = await DataBase.connection("lbn_user")
            .select("*")
            .where({ email:email })

            return user[0] && User.toUserModel(user[0])

        }catch(error){
            throw new error(error.sqlMessage || error.message)
        }
    }


    public async getAllUsers():Promise<User[]> {

    try{
        const users = await DataBase.connection("lbn_user").select(
            'id', 
            'name', 
            'email', 
            'role')
            return users.map((user => User.toUserModel(user)))

    }catch(error){ throw new error(error.sqlMessage || error.message)}




    
    }
}