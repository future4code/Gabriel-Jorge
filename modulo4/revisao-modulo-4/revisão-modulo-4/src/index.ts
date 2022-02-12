import { app } from "./app";
import { teSte } from "./ENDPOINTS/teste";
import { userRegistration } from "./ENDPOINTS/userRegistration";

app.get('/test', teSte)

app.post('/AddUser', userRegistration)