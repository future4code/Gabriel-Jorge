import connection from "../connection";
import { Request, Response } from "express";




export const AllProducts = async (req:Request, res:Response):Promise<void> => {

    const resoltado = await connection.raw('SELECT * FROM LBC_Products')

        res.status(200).send(resoltado[0])
}