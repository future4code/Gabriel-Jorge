import { Request, Response } from "express"
import {selectUserByEmail} from "../data/selectUserByEmail"
import { Authenticator} from "../services/authenticator"
import { compare } from "../services/hashManager"
import { user } from '../types/user'

export const login = async (
   req: Request,
   res: Response
): Promise<void> => {
   try {
      const { email, password } = req.body

      

      res.send({
         message: "Usuário logado!",
         token
      })

   } catch (error: any) {
      res.status(400).send(error.message)
   }
}