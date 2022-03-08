// import { Request, Response } from "express";
// import { insertUser } from "../data/insertUser";
// import { Authenticator } from "../services/authenticator";
// import { hash } from "../services/hashManager";
// import { generateId } from "../services/idGenerator";

// export const signup = async (
//    req: Request,
//    res: Response
// ) => {
//    try {
//       const { name, nickname, email, password, role } = req.body

//       if (
//          !name ||
//          !nickname ||
//          !email ||
//          !password ||
//          !role
//       ) {
//          throw new Error('Preencha os campos "name","nickname", "email" e "password"')
//       }

//       const id: string = generateId()

//       const cypherPassword = await hash(password);

//       await insertUser({
//          id,
//          name,
//          nickname,
//          email,
//          password: cypherPassword,
//          role
//       })
//       const authenticator = new Authenticator()
//       const token: string = authenticator.generateToken({
//          id,
//          role: role
//       })

//       res
//          .status(201)
//          .send({
//             message: "Usuário criado!",
//             token
//          })

//    } catch (error: any) {
//       res.status(400).send(error.message)
//    }
// }