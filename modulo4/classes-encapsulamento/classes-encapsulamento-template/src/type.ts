export type UserAccountType = {
    cpf: string,
    name: string,
    age: number,
    balance: number,
    transactions: TransactionType[]
  }
  
export type TransactionType = {
    description: string,
    value: number,
    date: string
  }