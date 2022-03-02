import app from "./app"
import { createNewUser } from "./endpoints/addNewUser"

import editUser from './endpoints/editUser'
import createUser from './endpoints/createUser'
import { idGenerator } from "./services/idGenerator"
import { generationToken, getToken } from "./services/autenticator"
import { singUp } from "./endpoints/singUp"
import { findUser} from "./services/findUser"
import { login } from "./endpoints/login"
import { userProfile } from "./endpoints/userProfile"





app.post("/user/signup", singUp)
app.post('/user/signup', createUser)
app.post('/newUser', createNewUser)
// app.put('/user/edit/:id', editUser)
app.post("/user/login", login)
app.get("/user/profile", userProfile)




// console.log(findUser("gbTT@gmail.com"))
// console.log(getUserByEmail("gbTT@gmail.com"))