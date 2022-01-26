import express,{Request, Response} from "express"
import cors from "cors"

import { AddressInfo } from "net"
import { getMaxListeners } from "process"

const app = express()

app.use(express.json())

const server = app.listen(process.env.PORT || 3003, () => {
  if (server) {
    const address = server.address() as AddressInfo;
    console.log(`Server is running in http://localhost:${address.port}`)
  } else {
    console.error(`Failure upon starting server.`)
  }
})

app.get("/ping", (req: Request, res: Response) => {


   res.send("pong")
})


type Afazeres = {
  userId: number,
  id: number,
  title: string,
  completed: boolean
}

const afazeres: Afazeres[] = [

{ userId: 1, id: 424, title: "treino panturrilha", completed: true },
{ userId: 1, id: 324, title: "treino ombro", completed: false },
{ userId: 2, id: 657, title: "treino biceps", completed: true },
{ userId: 2, id: 765, title: "30 min esteira", completed: false },
{ userId: 3, id: 123, title: "1000 pulos corda", completed: true },
{ userId: 3, id: 577, title: "120 flexoes", completed: false },
{ userId: 3, id: 278, title: "200 polichinelos", completed: false },
{ userId: 4, id: 354, title: "treino biceps", completed: true },
{ userId: 4, id: 876, title: "posterior de coxa", completed: false },
{ userId: 5, id: 950, title: "treino costas", completed: false },
{ userId: 6, id: 648, title: "supino reto", completed: false },
{ userId: 7, id: 178, title: "supino inclinado", completed: true }

]

app.get("/afazeres", (req: Request, res: Response) => {

res.send(afazeres)

})


app.post("/addAfazer", (req: Request, res: Response) => {
  const novoAfazer = req.body.title
  const userIdToAdd = Number(req.headers.authorization)
  // const userIdToAdd = Number(5) 
  const idNew:number = 312 

  afazeres.push({userId:userIdToAdd, id:idNew, title:novoAfazer, completed:false})

  res.send(afazeres)
})



app.put("/atualizar", (req: Request, res: Response) => {
  const id = Number(req.query.id)

    afazeres.forEach(afazer => {
      if (afazer.id === id) {
        afazer.completed = !afazer.completed
      }
    })

    const atualizacaoDeAfazeres = afazeres.filter( afazer => {if (afazer.id === id){return afazer}})

    res.send(atualizacaoDeAfazeres)
})