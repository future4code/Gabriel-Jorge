import { User } from "../types";
import { BaseDataBase } from "./BaseDataBase";

export class UserDataBase extends BaseDataBase {

    public async createUser(user: User): Promise <void> {
        try{
            await BaseDataBase.connection('Cukenu_Users')

        }catch(error:any){
            throw new Error(error.sqlMessage || error.message)
        }
    }


    public async findUserByEmail( email:string ):Promise <User> {
        try{
            const user = await BaseDataBase.connection('Cukenu_Users')
            .select('*')
            .where({email:email})

            return User.toUserModel(user[0])

        }catch(error:any){
             throw new Error(error.sqlMessage || error.message)
        }
    }
}