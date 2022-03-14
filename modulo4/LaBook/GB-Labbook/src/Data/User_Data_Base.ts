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
            }).into("labook_users")

        }catch(error: any){
            throw new Error(error.sqlMessage || error.message)
        }
    }

    selectUserByEmail = async (
        email: string
     ): Promise<user> => {
        try {
           const result = await UserDataBase.connection("labook_users")
              .select("*")
              .where({ email })
     
           return {
              id: result[0].id,
              name: result[0].name,
              email: result[0].email,
              password: result[0].password
           }
     
        } catch (error: any) {
           throw new Error(error.slqMessage || error.message)
        }
     }
} 