import connection from "../connection";
import { Request, Response } from "express";


export const AddProduct = async (req:Request, res:Response):Promise<void> =>{
        
    try{
        const id = Date.now()
        const name = req.body.name
        const price = req.body.price
        const image_url = req.body.image_url

        await connection.raw(`INSERT INTO LBC_Products VALUES (
            '${id}',
            '${name}',
            '${price}',
            '${image_url}')`
        )

        res.status(200).send("Produto criado com sucesso...")


    }catch (error){

        res.status(500).send("Algo de errado não está certo !!!")

    }          
}