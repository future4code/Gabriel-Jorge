import { BaseDataBase } from "../Data/BaseDataBase"
import { user } from "../Model/User"
import { Authenticator } from "../Services/Authenticator"

const baseDataBase = new BaseDataBase()

export class UserBusiness {
    singUp = async () => {


    }

    login = async (email:string, password:string) => {

        if (!email || !password) {
            throw new Error("Email e Senha não estão sendo pasados...")
         }
   
         const queryResult: any = await baseDataBase.connection("labook_users")
            .select("*")
            .where({ email })
   
         if (!queryResult[0]) {
            throw new Error("Credenciais inválidas")
         }
   
         const user: user = {
            id: queryResult[0].id,
            name: queryResult[0].name,
            email: queryResult[0].email,
            password: queryResult[0].password
         }
   
         const passwordIsCorrect: boolean = await compare(password, user.password)
   
         if (!passwordIsCorrect) {
            throw new Error("Credenciais inválidas")
         }
   
  
         const authenticator = new Authenticator()
  
         const token: string = authenticator.generateToken({
            id: user.id
         })        
    }
}