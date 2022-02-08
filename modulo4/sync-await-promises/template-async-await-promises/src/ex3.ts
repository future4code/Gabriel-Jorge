import axios from "axios"
import { baseURL } from "./baseURL"

//Ex-3-a)
//RES: funcionaPerfeitamente

type user = {
	id: string;
	name: string;
	email: string;
}

//Ex-3-b)

//Ex-3-c)

const getSubscribers = async (): Promise<user[]> => {
  const response = await axios.get(`${baseURL}/subscribers`);
  return response.data.map((res: any) => {
    return {
      id: res.id,
      name: res.name,
      email: res.email,
    };
  });
};
