import connection from "../connection";
import { Request, Response } from "express";


export const AddPurchase = async (req:Request, res:Response):Promise<void> =>{
        
    try{
        const id = Date.now()
        const user_id = req.body.user_id
        const product_id = req.body.product_id
        const quantity = req.body.quantity

        await connection.raw(`INSERT INTO LBC_Purchases VALUES (
            '${id}',
            '${user_id}',
            '${product_id}',
            '${quantity}',
            '${id}')`
        )

        res.status(200).send("Produto Comprado com sucesso...")


    }catch (error){

        res.status(500).send("Algo de errado não está certo !!!")

    }          
}