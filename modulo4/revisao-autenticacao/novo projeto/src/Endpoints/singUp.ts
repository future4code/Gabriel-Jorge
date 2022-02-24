import { Request, Response } from "express"
import { UserDataBase } from "../DataBase/UserDataBase"
import { User } from "../Entidades/User"
import { Autenticator } from "../Services/Autenticator"
import { HasManager } from "../Services/HashManager"
import { IdGenerator } from "../Services/idGenerator"


export const SingUp = async (req: Request, res: Response) => {
    try{
        const {name, email, password, role} = req.body

        if(!name && !email && !password && !role){res.status(300).send("Preencha os dados de NOME, EMAIL, PASSWORD, e ROLE...")}
        if(!name){res.status(300).send("Preencha o campo NOME...")}
        if(!email){res.status(300).send("Preencha o campo EMAIL...")}
        if(!password){res.status(300).send("Preencha o campo PASSWORD...")}
        if(!role){res.status(300).send("Preencha o campo ROLE...")}

        const userDataBase = new UserDataBase()
        const user = await userDataBase.findUserByEmail(email);

        if(user){res.status(409).send("Esse email, já está cadastrado....")}


        const idGenerator = new IdGenerator()     
        const id = idGenerator.generate()        
        // const id = new IdGenerator() //--------------------não funcionou

        const hasManager = new HasManager()
        const hashPassword = await hasManager.hash(password)

        const newUser = new User(id, name, email, hashPassword, role)
        await userDataBase.creteUser(newUser);


        const autenticator = new Autenticator()
        const token = autenticator.generate({id, role})

        res.status(200).send({message: "DEU BOM!!!!! Usuario Criado com sucesso !!!!", token})
    }catch(error){
        res.status(300).send(error.message )
    }
}

