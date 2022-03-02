import connection from "../connection"

export const findUser = async (email:string):Promise<any> => {
    try{
       const result = await connection.raw(`SELECT * FROM User_21_02 WHERE email= '${email}'`)
       return result[0]
    }catch(error){
        console.log("deu ruim", error)
    }
}

export const getUserByEmail = async(email: string): Promise<any> => {
    const result = await connection
      .select("*")
      .from("User_21_02")
      .where({ email });
 
    return result[0];
}
 
export const getUserById = async (id: string): Promise<any> => {
    const result = await connection
      .select("*")
      .from("User_21_02")
      .where({ id });

    return result[0];
}
