// import { Request, Response } from "express"
// import { authenticationData } from "../Model/User"
// import { Authenticator } from "../Services/Authenticator"
// import { IdGenerator } from "../Services/idGenerator"


// app.post('/posts/create', async (req: Request, res: Response) => {
//     try {
//        let message = "Success!"
 
//        const { photo, description, type } = req.body
 
//        const token: string = req..authorization as string

//        const authenticator = new Authenticator()
//        const tokenData: authenticationData = authenticator.getTokenData(token)
 
//        const gerarId = new IdGenerator()
//        const id: string = gerarId.generate()
 
//        await connection("labook_posts")
//           .insert({
//              id,
//              photo,
//              description,
//              type,
//              author_id: tokenData.id
//           })
 
//        res.status(201).send({ message })
 
//     } catch (error: any) {
//        let message = error.sqlMessage || error.message
//        res.statusCode = 400
 
//        res.send({ message })
//     }
//  })