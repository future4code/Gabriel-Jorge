import express,{Request, Response} from "express"
import cors from "cors"
import { produtos } from "./data"


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


export type Produtos = {
  id: number,
  name: string,
  price: number
}

 

app.get("/test",(req:Request, res: Response)=>{

  res.send("teste Realizado Com sucesso")

})


app.get("/produtos", (req:Request, res: Response)=>{


  res.status(201).send(produtos)
})

app.post("/novosProdutos", (req:Request, res: Response) => {
  const nomeProduto = req.body.name
  const idNovoProduto = Number(Date.now().toString())
  const precoNovoProduto = req.body.price

  if(!nomeProduto){return res.status(300).send("Tá faltando o NOME ae vacilão(lona)")}
  if(!precoNovoProduto){return res.send("Vai doar o produto??? NÃO...então põe o PREÇO vacilão(lona)")}

  produtos.push({id :idNovoProduto, name :nomeProduto, price :precoNovoProduto})

  res.status(201).send(produtos)
})

app.put("/trocarPreco", (req:Request, res:Response)=> {
    const id:number = req.body.id
    const novoPreco:number = req.body.price

    if(!novoPreco){return res.status(300).send("Tá faltando o PREÇO ae vacilão(lona)")}
    if(novoPreco <= -1){return res.status(300).send("Vai pagar seu cliente pra levar seu produto???? Tá Vacilando !!!!")}
    if(novoPreco === 0){return res.status(300).send("Vai doar o produto??? NÃO...então põe o PREÇO vacilão(lona)")}

    for (let i = 0; i < produtos.length; i++)
      if (produtos[i].id === id) {
        produtos[i].price = novoPreco
      }  
    res.status(201).send(produtos)
})

app.delete("/deletarProduto/:id", (req: Request, res: Response)=>{

  const produtoId = Number(req.query.id)
  
  if(!produtoId){return res.status(300).send("Está Faltando o ID !!!!")}

  for(let i = 0 ; i < produtos.length; i++){

    if(produtos[i].id === produtoId){
      produtos.splice(i,1)
    }
  }

  res.status(201).send({produtos})
})
