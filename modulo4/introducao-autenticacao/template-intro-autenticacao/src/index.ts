import app from "./app"
import { createNewUser } from "./endpoints/addNewUser"

import editUser from './endpoints/editUser'
import createUser from './endpoints/createUser'


app.post('/user/signup', createUser)

app.post('/newUser', createNewUser)


app.put('/user/edit/:id', editUser)


