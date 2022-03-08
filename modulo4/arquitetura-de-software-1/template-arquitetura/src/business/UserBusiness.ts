
import { UserDataBase } from "../data/UserDataBase"
import { Authenticator } from "../services/authenticator"
import { compare } from "../services/hashManager"
import { user } from "../types/user"

const userDB = new UserDataBase()

export class UserBusiness{

    singUp = async () => {


    }

    login = async (email:string, password:string) => {
        if (!email || !password) {
         throw new Error("'email' e 'senha' são obrigatórios")
      }

      const user: user = await userDB.selectUserByEmail(email)

      if (!user) {
         throw new Error("Usuário não encontrado ou senha incorreta")
      }

      const passwordIsCorrect: boolean = await compare(password, user.password)

      if (!passwordIsCorrect) {
         throw new Error("Usuário não encontrado ou senha incorreta")
      }
      const authenticator = new Authenticator()
      const token: string = authenticator.generateToken({
         id: user.id,
         role: user.role
      })
        return token
    }






}