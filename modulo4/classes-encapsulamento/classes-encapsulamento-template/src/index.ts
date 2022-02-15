import { UserAccountType, TransactionType} from "./type";

//Exercício 1-a) Para que serve o construtor 
// dentro de uma classe e como fazemos para chamá-lo?
// R:   É um tipo de função que recebe paramentros.


//Exercício 1-b) Copie o código abaixo para o seu exercício de hoje;
// crie uma instância dessa classe (dê o nome, cpf e idade que você quiser).
// Quantas vezes a mensagem "Chamando o construtor da classe User" foi impressa no terminal?
// R: 

class UserAccount {
    private cpf: string;
    private name: string;
    private age: number;
    private balance: number = 0;
    private transactions: TransactionType[] = [];
  
    constructor(
       cpf: string,
       name: string,
       age: number,
    ) {
       console.log("Chamando o construtor da classe UserAccount")
       this.cpf = cpf;
       this.name = name;
       this.age = age;


      
    }
    public getCpf(){
      console.log(this.cpf) 
  }
}
  const gabriel = new UserAccount('245.666.239-12', 'Gabriel', 28)

  

//Exercício 1-c) Como conseguimos ter acesso às propriedades privadas de uma classe?
//R: criando um metodo get

// Exercício 2 -

class Transaction {
    private date: string;
    private value: number;
    private description: string;
    
    constructor(date: string, value: number, description: string) {
      this.date = date;
      this.value = value;
      this.description = description
    }
  }

  
