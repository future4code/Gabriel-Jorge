import * as jwt from 'jsonwebtoken'
import { autenticatorData } from '../types'

export const generationToken = (id:string/*payload:autenticatorData*/):string => {
    return jwt.sign(
        /*payload,*/
        {id},
        "chaveSuperSecreta",
        {
            expiresIn: "1h"

        }
    )
}


export const getToken = (token:string) => {
    return jwt.verify(
        token,
        "chaveSuperSecreta"
    )
}

export class Autorization {
    generationToken2 = (
        payload: autenticatorData
    ) => {
        return jwt.sign(
            payload,
            "senhaSuperSecreta",
            {
                expiresIn: "3m"
            }
        )
    }
    getToken2 = (token:string) =>{
        try{
        const tokenData = jwt.verify(
            token,
            "senhaSuperSecreta"
        ) as autenticatorData
        return {id: tokenData.id}
        }catch(error){
            console.log(error)
            return null

        }
    }
}