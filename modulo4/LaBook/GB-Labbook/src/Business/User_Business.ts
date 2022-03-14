
import { response } from "express"
import { BaseDataBase } from "../Data/BaseDataBase"
import { UserDataBase } from "../Data/User_Data_Base"
import { user } from "../Model/User"
import { Authenticator } from "../Services/Authenticator"


const userDB = new UserDataBase
export class UserBusiness extends BaseDataBase{
    singUp = async () => {
    }

    login = async ( email:string, password:string ) => {

        if ( !email || !password ) {
            throw new Error("Email e Senha não estão sendo pasados...")
         }

        
         const user : user = await userDB.selectUserByEmail(email)
   
         if (!user) {
            throw new Error("Credenciais inválidas")
         }
        
         

   
         if (password !== user.password) {
            throw new Error("Credenciais inválidas")
         }
   
         const authenticator = new Authenticator()
  
         const token: string = authenticator.generateToken({
            id: user.id            
         })     
                  
         return token 
      }
}