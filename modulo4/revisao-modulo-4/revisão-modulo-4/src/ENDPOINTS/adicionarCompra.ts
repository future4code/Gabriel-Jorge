import connection from "../connection";
import { Request, Response } from "express";




 const AllPuchaseUser = async (req:Request, res:Response):Promise<void> => {
    const id = req.params.user_id

    const resoltado = await connection.raw
    (`SELECT LBC_Users.name, LBC_Users.email, LBC_Products.name, LBC_Purchases.quantity FROM LBC_Users INNER JOIN LBC_Purchases ON LBC_Users.id = LBC_Purchases.user_id INNER JOIN LBC_Products ON LBC_Purchases.product_id = LBC_Products.id where LBC_Users.id = "${id}"`)

        res.status(200).send(resoltado[0])
}

export default AllPuchaseUser