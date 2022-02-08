import axios from "axios"
import { baseURL } from "./baseURL"

// axios.get(`${baseURL}/subscribers`).then(console.log)

// Ex1-a)Qual endpoint você deve utilizar para isso?
// RES: Metodo Get


// Ex1-b)Como indicamos o tipo de uma função assíncrona que retorna um "array de qualquer coisa"?
// RES: ":Promise <any[]>"

// Ex1-c)
async function getSubscribers (): Promise<any[]> {
    const response = await axios.get(`${baseURL}/subscribers`);
    return response.data;
    console.log(response.data)
}
console.log(getSubscribers())

