import { Request, Response } from "express"
import { user } from "../Model/User"
import { Authenticator } from "../Services/Authenticator"

app.post('/users/login', async (req: Request, res: Response) => {
    try {
       let message = "Success!"
 
       const { email, password } = req.body
 
        
 
       res.status(200).send({ message, token })
 
    } catch (error: any) {
       let message = error.sqlMessage || error.message
       res.statusCode = 400
 
       res.send({ message })
    }
 })