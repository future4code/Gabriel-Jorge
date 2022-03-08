import { Request, Response } from "express"
import { UserBusiness } from "../business/UserBusiness"

const userBusiness = new UserBusiness()
export class UserControler {
    login = async (
        req: Request,
        res: Response
     ): Promise<void> => {
        try {
           const { email, password } = req.body
     
     const token = userBusiness.login(email, password)      
     
           res.send({
              message: "Usuário logado!",
              token
           })
     
        } catch (error: any) {
           res.status(400).send(error.message)
        }
     }
}