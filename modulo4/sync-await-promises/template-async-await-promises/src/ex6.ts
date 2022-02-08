import axios from "axios"
import { baseURL } from "./baseURL"

//Ex-6)


// const sendNotifications = async (
//     users: user[],
//     message: string
//   ): Promise<void> => {
  
//       try {
//         const promises = users.map(user =>{
//           return axios.post(`${baseURL}/notifications`, {
//             subscriberId: user.id,
//             message: message,
//           })
//         })
      
//         await Promise.all(promises);
  
//       } catch {
//           console.log("Error");
//       }
//   };