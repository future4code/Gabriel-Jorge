//importando express com Request e Response e cors
import express, { Request, Response } from "express";
import cors from "cors";

import { AddressInfo } from "net";
import { join } from "path";
import connection from "./conections";
import { connect } from "http2";


//iniciando a aplicação web com express
const app = express();

//ativando os módulos de Bodyparser e cors
app.use(express.json());
app.use(cors());

//Exemplos - consultas no banco ou querys

//Exemplos - endpoints

//Servidor
const server = app.listen(process.env.PORT || 3003, () => {
  if (server) {
    const address = server.address() as AddressInfo;
    console.log(`Server is running in http://localhost: ${address.port}`);
  } else {
    console.error(`Failure upon starting server.`);
  }
});





app.get("/users", async (req:Request, res:Response):Promise<void> => {
  try{
    const resultado = await connection.raw(`SELECT * FROM TDL_users`)
      res.status(200).send(resultado[0])
    }
       
    catch (error:any){
       res.status(500).send(error.sqlMessage || error.message)
       }
})



app.post("/AddUser", async (req: Request,res: Response) :Promise<void> =>{
  const id = Date.now()
  const name = req.body.name
  const nickname = req.body.nickname
  const email = req.body.email

if (!name && !nickname && !email){res.status(300).send("Insira seus dados...")}
if (!name){res.status(300).send("O campo NOME é obrigatorio, adicione ele e tente mais uma vez...")}
if (!nickname){res.status(300).send("O campo NICKNAME é obrigatorio, adicione ele e tente mais uma vez...")}
if (!email){res.status(300).send("O campo EMAIL é obrigatorio, adicione ele e tente mais uma vez...")}


  try{
    
    await connection.raw(`INSERT INTO TDL_users VALUES
    ('${id}','${name}','${nickname}','${email}');`)
      res.status(200).send("Usuario Adicionado com sucesso!!")

  }catch{
    res.status(500).send("ALGO DE ERRADO NÃO ESTÁ CERTO...")
  }
})



// app.get("/user/id",async (req:Request,res:Response) :Promise<void> =>{

//   const id = req.body.id

//   try{
//     await connection.raw(`SELECT * FROM TDL_users WHERE id = ${id}`)

//   }catch{
//     res.status(500).send ("ALGO DE ERRADO NÃO ESTÁ CERTO...")
//   }
// })


app.get("/user/:id", async (req:Request, res:Response):Promise<void> => {

  const id = req.body.id
  try{
    const resultado = await connection("TDL_users").where({id: req.params.id})
    res.status(201).send({message:resultado[0]})
  }
  catch (error:any){
  res.status(500).send(error.sqlMessage || error.message)
  }
})

app.put("/editUser/:id", async (req:Request, res:Response):Promise<void> =>{
  
  const name = req.body.name
  const nickname = req.body.nickname
  const email = req.body.email
  const id = req.params.id

    if (!name && !nickname && !email){res.status(300).send("Insira seus dados...")}
    if (!name){res.status(300).send("O campo NOME é obrigatorio, adicione ele e tente mais uma vez...")}
    if (!nickname){res.status(300).send("O campo NICKNAME é obrigatorio, adicione ele e tente mais uma vez...")}
    if (!email){res.status(300).send("O campo EMAIL é obrigatorio, adicione ele e tente mais uma vez...")}
    if (!id){res.status(300).send("O campo ID é obrigatorio, adicione ele e tente mais uma vez...")}

    try{
      await connection.raw(`UPDATE TDL_users SET 
        name = "${name}",
        nickname = "${nickname}",
        email = "${email}"
        WHERE id = "${id}";`)

      res.status(200).send("Usuario Alterado com sucesso ...!!!")
    }catch{
      res.status(500).send ("ALGO DE ERRADO NÃO ESTÁ CERTO...")
    }
})

app.post("/addTask/:id", async (req:Request, res:Response):Promise<void> =>{
  const id = req.params.id
  const title = req.body.title
  const description = req.body.description
  const limitDate = req.body.limitDate
  const newId = Date.now()

  try{
    await connection.raw(`INSERT INTO TDL_tasks VALUES (
    "${newId}",
    "${title}",
    "${description}",
    "${limitDate}",
    "${id}");`)
    
    res.status(200).send("Tarefa adicionada com sucesso !!!")
  }catch{
    res.status(500).send("Algo de Errado não está certo...")
  }
})