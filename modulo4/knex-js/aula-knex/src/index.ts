//importando express com Request e Response e cors
import express, { Request, Response } from "express";
import cors from "cors";
//extra: importando configuração de rede do node
import { AddressInfo } from "net";
import { join } from "path";
import connection from "./conections";


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





//teste todos os atores

app.get("/atores", async (req:Request, res:Response):Promise<void> => {
  try{
    const resultado = await connection.raw(`SELECT * FROM Actor`)
      res.status(200).send(resultado[0])
    }
       
    catch (error:any){
       res.status(500).send(error.sqlMessage || error.message)
       }
})



// EX-1-a)
// R: Qnado usamos o row ele nos devolve um bojeto dentro de outro objeto por isso necessitamos usar [0][0], para representar uma camada dentro de outra camada.


// EX-1-b)
app.get("/1", async (req:Request, res:Response):Promise<void> => {
  try{
    const resultado = await connection("Actor").where({name: req.body.name})
    res.status(201).send({message:resultado[0]})
  }
  catch (error:any){
  res.status(500).send(error.sqlMessage || error.message)
  }
})


app.get("/2", async (req:Request, res:Response):Promise<void> => {
  try{
    const resultado = await connection.raw(`SELECT * FROM Actor WHERE name = "${req.body.name}"`)
      res.status(200).send(resultado[0][0])
    }
       
    catch (error:any){
       res.status(500).send(error.sqlMessage || error.message)
       }
})

// EX-1-c)
app.get("/gender", async (req:Request, res:Response):Promise<void> => {
  try{
    const resultado = await connection.raw(`SELECT COUNT (*) FROM Actor WHERE gender = "${req.body.gender}"`)
      res.status(200).send(resultado[0][0])
    }
       
    catch (error:any){
       res.status(500).send(error.sqlMessage || error.message)
       }
})

// EX-2-a)
app.get("/updateActor", async (req:Request, res:Response):Promise<void> => {
  try{      
      await connection("Actor")
        .update({
          salary: req.body.salary
        })
        .where("id", req.body.id);
    
    res.status(200).send("Salario Atualizado")
    }       
    catch (error:any){
       res.status(500).send(error.sqlMessage || error.message)
       }
})

// EX-2-b)
app.get("/deleteActor", async (req:Request, res:Response):Promise<void> => {
  try{      
    await connection("Actor")
    .delete()
    .where("id", req.body.id);
    
    res.status(200).send("Ator Excluido")
    }       
    catch (error:any){
       res.status(500).send(error.sqlMessage || error.message)
       }
})

// EX-2-c)
// app.get("/mediaGender", async (req:Request, res:Response):Promise<void> => {
//   try{      
//     const result = await connection("Actor")
//     .avg("salary")
//     .where({ gender: req.body.gender });
    
//     res.status(200).send(`A media é ${result[0]}`)
//     }       
//     catch (error:any){
//        res.status(500).send(error.sqlMessage || error.message)
//        }
// })

// EX-3-a)
app.get("/actor/:id", async (req: Request, res: Response) => {
  try {
    const id = req.params.id;
    const actor = await getActorById(id);

    res.status(200).send(actor)
  } catch (err:any) {
    res.status(400).send({
      message: err.message,
    });
  }
});




// EX-3-b)