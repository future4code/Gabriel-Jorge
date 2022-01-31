import express, { Request, Response } from 'express'
import cors from 'cors'
import { users } from './users'

  const app = express()
  app.use(express.json())
  app.use(cors())

const diaDeHoje = Date().split(" ")[2]
const anoDeHoje = Date().split(" ")[3]
let mesDeHoje = 0 

if (Date().split(" ")[1] === "Jan"){ mesDeHoje = 1}
else if(Date().split(" ")[1] === "Fev"){ mesDeHoje = 2}
else if(Date().split(" ")[1] === "Mar"){ mesDeHoje = 3}
else if(Date().split(" ")[1] === "Abr"){ mesDeHoje = 4}
else if(Date().split(" ")[1] === "Mai"){ mesDeHoje = 5}
else if(Date().split(" ")[1] === "Jun"){ mesDeHoje = 6}
else if(Date().split(" ")[1] === "Jul"){ mesDeHoje = 7}
else if(Date().split(" ")[1] === "Ago"){ mesDeHoje = 8}
else if(Date().split(" ")[1] === "Set"){ mesDeHoje = 9}
else if(Date().split(" ")[1] === "Out"){ mesDeHoje = 10}
else if(Date().split(" ")[1] === "Nov"){ mesDeHoje = 11}
else if(Date().split(" ")[1] === "Dez"){ mesDeHoje = 12}

const diaCompleto = (`${diaDeHoje}/${mesDeHoje}/${anoDeHoje}`)


app.listen(3003, () => {
  console.log('Server is running at port 3003')
})


app.get("/ping", (req: Request, res: Response) => {
  res.status(200).send("pong!")
})

app.get("/users",(req:Request, res:Response)=>{

res.status(200).send(users)
})

type Users = {
  name: string,
  cpf: string,
  dateBirth: string,
  sex: string,
  balance: number
  }

app.post("/newUser", (req:Request, res: Response)=>{

  const newName = req.body.name
  const newCpf = req.body.cpf
  const newNumberBirth = req.body.numberBirth
  const newSex = req.body.sex
  const newBalance = req.body.balance

  if(!newName && !newCpf && !newNumberBirth && !newSex){return ("Preencha seus dados...")}
  if(!newName){return res.status(300).send("Preencha o NOME...")}
  if(!newCpf){return res.status(300).send("Preencha o CPF...")}
  if(!newNumberBirth){return res.status(300).send("Preencha o IDADE...")}
  if(!newSex){return res.status(300).send("Preencha o SEXO...")}
  if(!newBalance){return res.status(300).send("Adicione um valor a sua conta...(obs: min R$ 10,00)")}
  if(newBalance < 10){return res.status(300).send("Valor minimo para abrir uma conta é r$ 10,00")}
  if(newNumberBirth.split("/")[2] > 2004){return res.status(300).send("Infelizmente nosso sistema só permite usuarios com idade igual ou assima dos 18 anos")}
  
  users.push({name: newName, cpf: newCpf, dateBirth: newNumberBirth ,sex: newSex, balance: newBalance})
  res.status(200).send(users)
})

app.get("/balance",(req:Request,res:Response)=>{

  const nameSearch = req.body.name
  const cpfSearch = req.body.cpf

  if(!nameSearch){return res.status(300).send("NOME não foi passado...")}
  if(!cpfSearch){return res.status(300).send("CPF não foi passado...")}


  const response = users.filter( user => (user.name === nameSearch && user.cpf === cpfSearch))


  res.status(200).send(response)
})

app.put("/addBalance",(req:Request, res:Response)=>{
  const nameSearch = req.body.name
  const cpfSearch = req.body.cpf
  const valorAdicionar = req.body.valor


  if(!nameSearch && !cpfSearch && !valorAdicionar){return res.status(300).send("Os dados não foram passados...")}
  if(!nameSearch){return res.status(300).send("Adicione o VALOR por favor...")}
  if(!cpfSearch){return res.status(300).send("Adicione o VALOR por favor...")}
  if(!valorAdicionar){return res.status(300).send("Adicione o VALOR por favor...")}
  if(valorAdicionar === 0){return res.status(300).send("Vai adicionar Zero cidadão???")}
  if (valorAdicionar <= -1 ){return res.status(300).send("Tá Pagando Divida ???")}


  for (let i = 0; i < users.length; i++)
  if (users[i].name === nameSearch || users[i].cpf === cpfSearch){
    users[i].balance = valorAdicionar + users[i].balance
  }

res.status(300).send(users)
})
