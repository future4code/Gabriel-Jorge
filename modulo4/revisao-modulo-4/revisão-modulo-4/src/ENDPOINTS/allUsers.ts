import connection from "../connection";
import { Request, Response } from "express";




export const AllUsers = async (req:Request, res:Response):Promise<void> => {

    const resoltado = await connection.raw('SELECT * FROM LBC_Users')

        res.status(200).send(resoltado[0])
}