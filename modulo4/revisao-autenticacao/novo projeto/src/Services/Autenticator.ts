import * as jwt from 'jsonwebtoken'
import { USER_ROLES } from '../Entidades/User';


export interface AutenticationData {
    id:string
    role: USER_ROLES
}






export class Autenticator {
    public generate(input: AutenticationData): string {

        const token = jwt.sign(input, process.env.JWT_KEY,{
            expiresIn: process.env.ACCESS_TOKEN_EXPIRES_IN
        })
        return token
    }
    public getTokenData(token: string): AutenticationData{
        const data = jwt.verify(token, process.env.JWT_KEY)
        return data as AutenticationData
    }
}