import knex from 'knex'
import dotenv from 'dotenv'

dotenv.config()

const connection = knex({ // Estabelece conexão com o banco
    client: "mysql",
    connection: {
    host: "35.226.146.116",
    port: 3306,
    user: "gabriel-gomes-da-costa-jorge",
    password: "52i1ce@Hcn90%re34L9W",
    database: "carver-gabriel-gomes-da-costa-jorge",
    multipleStatements: true
    }
})

export default connection