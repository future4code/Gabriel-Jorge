import { app } from "./app";
import { AddProduct } from "./ENDPOINTS/addProduct";
import { AddPurchase } from "./ENDPOINTS/addPurchase";
import { AddUser } from "./ENDPOINTS/addUser";
import { AllProducts } from "./ENDPOINTS/allProducts";
import { AllUsers } from "./ENDPOINTS/allUsers";
import { teSte } from "./ENDPOINTS/teste";
import { userRegistration } from "./ENDPOINTS/userRegistration";
import AllPuchaseUser from "./ENDPOINTS/adicionarCompra"


//------------------------tests--------------------------
app.get('/test', teSte)

app.post('/AddUser', userRegistration)
//-----------------------------------------------------


app.post("/users", AddUser)

app.get("/users", AllUsers)

app.post("/products", AddProduct)

app.get("/products", AllProducts)

app.post("/purchases", AddPurchase)

app.get("/users/:user_id/purchases", AllPuchaseUser)