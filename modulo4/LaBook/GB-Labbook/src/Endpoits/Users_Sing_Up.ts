import { Request,Response } from "express"
import { Authenticator } from "../Services/Authenticator"
import { IdGenerator } from "../Services/idGenerator"

app.post('/users/signup', async (req: Request, res: Response) => {
    try {
       let message = "Success!"
       const { name, email, password } = req.body
 
       if (!name || !email || !password) {
          res.statusCode = 406
          message = '"name", "email" and "password" must be provided'
          throw new Error(message)
       }
 
       const gerarId = new IdGenerator()

       const id: string = gerarId.generate()
 
       const cypherPassword = await hash(password);
 
       await connection('labook_users')
          .insert({
             id,
             name,
             email,
             password: cypherPassword
          })
 

        const authenticator = new Authenticator()

       const token: string = authenticator.generateToken({ id })
 
       res.status(201).send({ message, token })
 
    } catch (error: any) {
       res.statusCode = 400
       let message = error.sqlMessage || error.message
 
       res.send({ message })
    }
 })