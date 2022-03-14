import { Request, Response } from "express"
import { UserBusiness } from "../Business/User_Business"
import { user } from "../Model/User"
import { Authenticator } from "../Services/Authenticator"



const userBusiness = new UserBusiness()
const authenticator = new Authenticator
export class UserControler {
   singUp = async () => {


   }

   login = async (req: Request, res: Response):Promise<void> => {

            try {
         
               const { email, password } = req.body         
               
               const token = await userBusiness.login( email, password )

               res.status(200).send({ message:"Usuario logado com sucesso...", token })
         
            } catch (error: any) {
               let message2 = error.sqlMessage || error.message
               
               res.status(400).send({message: "Algo de errado não está certo...", message2})}
            }
   
}