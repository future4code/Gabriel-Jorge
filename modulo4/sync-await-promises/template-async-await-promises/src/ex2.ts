import axios from "axios"
import { baseURL } from "./baseURL"

//Ex-1-a)
// Amsior diferença entre as sintaxes é o inicio na função normal ela começa com async function nome_da_funcao ():Promise<any[]> {}
// já na arrow function ele começa com const Nome_da-funçao = async

//Ex-1-b)
const getSubscribers = async (): Promise<any[]> => {
    const response = await axios.get(`${baseURL}/subscribers`);
    return response.data;
  };
  
  console.log(getSubscribers())


