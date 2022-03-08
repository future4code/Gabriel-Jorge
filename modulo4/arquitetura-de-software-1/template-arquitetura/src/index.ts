import { app } from "./controller/app"
import { UserControler } from "./controller/UserControler"
// import { signup } from './endpoints/signup'
// import { createTask } from './endpoints/createTask'
// import { getTaskById } from './endpoints/getTaskById'
// import { login } from './endpoints/login'

const userControler = new UserControler()


// app.post('/user/signup', signup)
app.post('/user/login', userControler.login)

// app.put('/task', createTask)
// app.get('/task/:id', getTaskById)

console.log("tudo 2...")