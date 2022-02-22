export type user = {
   id: string
   email: string
   password: string
   name: string
   nickname: string
}

export class User {
   protected id: string
   protected email: string
   protected password: any

   constructor(id: string, email: string, password: any){
       this.id = id,
       this.email = email
       this.password = password
   }
}