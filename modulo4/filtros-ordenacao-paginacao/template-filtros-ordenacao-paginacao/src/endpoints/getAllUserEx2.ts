import { Request, Response } from "express"
import { connection } from "../data/connection"
import { recipe } from "../types"

const getAllUsersEx2 = async (req: Request,res: Response):Promise<any> =>{

try{
    let parametro:string = req.query.name as string
    let order:string = req.query.tipo as string

    if(!parametro){parametro = 'email'}

}catch(error:any){

    res.send(error.message || error.sqlMessage)

}




}