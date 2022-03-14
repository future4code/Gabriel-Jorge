import { app } from "./Controler/app"
import { UserControler } from "./Controler/User_Controler"

console.log("Hello Word...")


const UC = new UserControler()

app.post('/users/login', UC.login)