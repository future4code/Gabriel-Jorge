import connection from "../connection";
import { Request, Response } from "express";




export const teSte = async (req:Request, res:Response):Promise<void> => {

    const resoltado = await connection.raw('SELECT * FROM TDL_users')

        res.status(200).send(resoltado[0])
}