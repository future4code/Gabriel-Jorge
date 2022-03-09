import { app } from "./controller/app"
import { signup } from './controller/user/signup'
import { login } from './controller/user/login'
import { createTask } from './controller/task/createTask'
import { getTaskById } from './controller/task/getTaskById'



// app.use("/user", userRouter)
// app.use("/task", taskRouter)


app.post('/user/signup', signup)
app.post('/user/login', login)

app.put('/task', createTask)
app.get('/task/:id', getTaskById)

console.log("esta tudo funconando pai")