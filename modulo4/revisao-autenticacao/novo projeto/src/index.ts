import { app } from "./app";
import { getAllCharacters } from "./Endpoints/getAllCharacters";
import { Login } from "./Endpoints/login";
import { SingUp } from "./Endpoints/singUp";

app.get("/user", getAllCharacters)
app.post("/user", SingUp)
app.post("/user/Login", Login)