import { Request, Response } from "express"
import { connection } from "../data/connection"
import { recipe } from "../types"



export default async function selectAllUsers(req:Request ,res:Response):Promise<any> {
    const nome = req.params.type
    const result = await connection.raw(`
       SELECT id, name, email, type
       FROM aula48_exercicio WHERE name = ${nome};
    `)

    return result[0]
 }

export const getAllUsers = async(req: Request,res: Response): Promise<void> =>{
    try {
       const users = await selectAllUsers(req, res)
 
       if(!users.length){
          res.statusCode = 404
          throw new Error("No recipes found")
       }
 
       res.status(200).send(users)
       
    } catch (error:any) {
       console.log(error)
       res.send(error.message || error.sqlMessage)
    }
 }



