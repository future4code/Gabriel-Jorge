import { user } from "../types/user";
import { BaseDataBase } from "./BaseDataBase";

export class UserDataBase extends BaseDataBase {

   public insertUser = async(
        user: user
     ) => {
        await UserDataBase.connection.insert({
           id: user.id,
           name: user.name,
           nickname: user.nickname,
           email: user.email,
           password: user.password,
           role: user.role
        }).into('to_do_list_users')
     }


     selectUserByEmail = async (
        email: string
     ): Promise<user> => {
        try {
           const result = await UserDataBase.connection("to_do_list_users")
              .select("*")
              .where({ email })
     
           return {
              id: result[0].id,
              name: result[0].name,
              nickname: result[0].nickname,
              email: result[0].email,
              password: result[0].password,
              role: result[0].role
           }
     
        } catch (error: any) {
           throw new Error(error.slqMessage || error.message)
        }
     }
}