import express from "express"

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

app.get("/", (req, res) => {          
    res.send("Hello from Express")
})

type User = {
    id :number,
    name :string,
    phone :string,
    email :string,
    website :string
}

const User1:User = {
    id :1,
    name :"Gabriel",
    phone :"2161988436194",
    email : "gab@lab.com",
    website : "www.gab.com.br"
}

const User2:User = {
    id :2,
    name :"Thayna",
    phone :"21936478352",
    email : "thay@lab.com",
    website : "www.thay.com.br"
}

const User3:User = {
    id :3,
    name :"Fulana",
    phone :"21336278354",
    email : "fulana@lab.com",
    website : "www.fulana.com.br"
}

const todosOsUsuarios = [ User1, User2, User3 ]

app.get("/users", (req, res) => {  
    
    
    res.send(todosOsUsuarios)
})


type Post = {
    id:number,
    title:string,
    body :string,
    userId :number
}

const Post1:Post = {
    id: 1,
    title:"Texto1",
    body :"",
    userId : 1    
}

const Post2:Post = {
    id: 2,
    title:"Texto2",
    body :"string",
    userId : 1    
}

const Post3:Post = {
    id: 3,
    title:"Texto3",
    body :"string",
    userId : 1    
}

const Post4:Post = {
    id: 1,
    title:"Texto1",
    body :"",
    userId : 2    
}

const Post5:Post = {
    id: 1,
    title:"Texto1",
    body :"",
    userId : 2   
}

const Post6:Post = {
    id: 1,
    title:"Texto1",
    body :"",
    userId : 3    
}

const Post7:Post = {
    id: 1,
    title:"Texto1",
    body :"",
    userId : 3    
}

const Post8:Post = {
    id: 1,
    title:"Texto1",
    body :"",
    userId : 3    
}

const todosOsPosts = [ Post1, Post2, Post3, Post4, Post5, Post6, Post7, Post8 ]

app.get("/posts" , (req, res) => {


    res.send(todosOsPosts)
})



app.get("user/:id", (req, res) => {
    const id = req.params.id

    

    todosOsUsuarios.forEach((user:any) => {
        user.todosOsUsuarios = user.todosOsUsuarios.filter((usuario: any) => {
            if(usuario.id === id){
                return{}
            }
            return usuario
        })
    })
})

