import { Request, Response } from "express"
import { getToken } from "../services/autenticator"
import { getUserById } from "../services/findUser"
import { autenticatorData } from "../types"

export const userProfile = async (req:Request,res: Response):Promise<any> =>{

    try{
            const token = req.headers.autorization as string
                console.log("Esse é o token", token)
                
            const AutenticationData = getToken(token) as autenticatorData
                console.log("Esse é o autenticationData", AutenticationData)
                
            const user = await getUserById(AutenticationData.id)

            res.status(200).send({
                id: user.id,
                email: user.email,
            });
    }catch(error){res.status(300).send({message: "algo de errado não está certo", error})}
}