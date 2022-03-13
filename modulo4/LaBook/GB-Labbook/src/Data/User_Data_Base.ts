import { user } from "../Model/User";
import { BaseDataBase } from "./BaseDataBase";


export class UserDataBase extends BaseDataBase {

    insertUser = async(user :user) => {

        try{
            await UserDataBase.connection.insert({
                id : user.id,
                name: user.name,
                email: user.email,
                password: user.password
            }).into("test")

        }catch(error: any){
            throw new Error(error.sqlMessage || error.message)
        }
    }
} 