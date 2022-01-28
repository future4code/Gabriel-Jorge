import express, { Request, Response } from 'express'
import cors from 'cors'

type User = {
  id: number,
  name: string,
  email: string,
  type: string,
  age: number
}


// Mock simulando um array de usuários no Banco de Dados
let users: User[] = [
  {
      id: 1,
      name: "Alice",
      email: "alice@email.com",
      type: "ADMIN",
      age: 12
  },
  {
      id: 2,
      name: "Bob",
      email: "bob@email.com",
      type: "NORMAL",
      age: 36
  },
  {
      id: 3,
      name: "Coragem",
      email: "coragem@email.com",
      type: "NORMAL",
      age: 21
  },
  {
      id: 4,
      name: "Dory",
      email: "dory@email.com",
      type: "NORMAL",
      age: 17
  },
  {
      id: 5,
      name: "Elsa",
      email: "elsa@email.com",
      type: "ADMIN",
      age: 17
  },
  {
      id: 6,
      name: "Fred",
      email: "fred@email.com",
      type: "ADMIN",
      age: 60
  }
]

enum UserType {
  ADMIN = "ADMIN",
  NORMAL = "NORMAL"
}

const app = express()
app.use(express.json())
app.use(cors())

// Para testar se o servidor está tratando os endpoints corretamente
app.get("/ping", (req: Request, res: Response) => {
  res.status(200).send("pong!")
})

app.listen(3003, () => {
  console.log('Server is running at port 3003')
})

app.get("/users",(req:Request,res:Response)=>{

  res.status(200).send(users)
})

app.get("/userType/:type",(req: Request,res: Response)=>{

  const typeSearch = req.params.type.toUpperCase()

  const typesMeet = users.filter( user => (user.type === typeSearch))

  
  res.status(200).send(typesMeet)
})

app.get("/userName/:name",(req: Request,res: Response)=>{

  const nameSearch = req.params.name

  const response = users.filter( user => (user.name === nameSearch))

  
  res.status(200).send(response)
})

app.post("/userADD", (req: Request,res: Response)=>{
const newId = Date.now()
const newName = req.body.name
const newEmail = req.body.email
const newType = req.body.type
const newAge = req.body.age

  users.push({id:newId, name:newName, email:newEmail, type:newType, age:newAge})

  res.status(200).send(users)
})

