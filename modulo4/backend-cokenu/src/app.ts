import express, { Express } from "express"
import knex from "knex";
import dotenv from 'dotenv'
import { AddressInfo } from 'net'
import cors from 'cors'

dotenv.config()


const app: Express = express()
    app.use (express.json())
    
    app.use (cors())

const server = app.listen(process.env.PORT || 3003, () => {

    if(server) {
        const address = server.address() as AddressInfo
        console.log (`O Servidor está funcionando em http://localhost: ${address.port}`)

    } else {
        console.error("Deu merda ae no servidor mano...")
    }
})