import axios from "axios"
import { baseURL } from "./baseURL"


//Ex-4-a)
//RES: metodo put, pq diz na documentação

//Ex-4-b)
const createNews = async(
  title: string,
  content: string,
  date: number
): Promise<void> => {
  await axios.put(`${baseURL}/news`, {
    title: title,
    content: content, 
    date: date
  });
}