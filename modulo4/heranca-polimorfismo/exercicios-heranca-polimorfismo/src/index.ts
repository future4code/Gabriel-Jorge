import { venda } from "./types"

// class usuario {
//     private id:string
//     private email:string 
//     private nome:string
//     private senha:string

//     constructor( id:string, email:string, nome:string, senha:string ){
//         this.id = id
//         this.email = email
//         this.nome = nome
//         this.senha = senha
//     }


//     public pegarAtributos() {
//         return {
//         id: this.id, 
//         email: this.email,
//         nome: this.nome,
//         senha: this.senha
//         }
//     }
// }
// class consumidores extends usuario {

//     numeroCartao:string
//     totalCompras:number

//     constructor( id:string, email:string, nome:string, senha:string , numeroCartao:string, totalCompras:number ){
//         super(id, email, nome, senha)
//         this.numeroCartao = numeroCartao
//         this.totalCompras = totalCompras        
//     }
// }

// class funcionarios extends usuario {

//     salarioBase:number

//     constructor(id:string, email:string, nome:string, senha:string, salarioBase:number){
//         super(id, email, nome, senha)
//         this.salarioBase = salarioBase
//     }
// }

// class vendedores extends usuario {

//     vendas:venda[]

//     constructor(id:string, email:string, nome:string, senha:string, vendas:venda[]){
//         super(id, email, nome, senha)
//         this.vendas = vendas
//     }
// }

// const gabriel = new usuario('123.456.789-10', 'gabriel.ggcj@gmail.com', "gabrial","12345678")
// // console.log(gabriel.pegarAtributos())
// console.log(gabriel)

//--------------------------------------------------------------------------------------------------------------------------
//--------------------Herança----------------------------------------------------------------------------//

class User {
    
    private id: string;
    private email: string;
    private name: string;
    private password: string;
  
    constructor(
          id: string,
          email: string,
          name: string,
          password: string
      ){
          console.log("Chamando o construtor da classe User")
          this.id = id
          this.email = email
          this.name = name 
          this.password = password
      }
  
      public getId(): string {
          return this.id
      }
  
      public getEmail(): string {
          return this.email
      }
  
      public getName(): string {
          return this.name
      }
      public interoduceYourself(): string {
        return (`Olá, sou ${this.name}. Bom dia!`)
     }
  }

//   const gabriel = new User('123.456.789-10', 'gabriel.ggcj@gmail.com', "gabrial","12345678")
// console.log(gabriel.getEmail())

// Exercício 1- a) Seria possível imprimir a senha (password) atrelada a essa instância?
// R: NAO, PORQUE ELA NÃO TEM UMA FUNÇÃO DENTRO PARA ESPORTAR ESSA INFORMAÇÃO

// Exercício 1- b) Quantas vezes a mensagem "Chamando o construtor da classe User" foi impressa no terminal?
// R: APENAS UMA VEZ


//-------------------------------------------------------------------------------------------------------------------------


class Customer extends User {
    public purchaseTotal: number = 0;
    private creditCard: string;
  
    constructor(
      id: string,
      email: string,
      name: string,
      password: string,
      creditCard: string
    ) {
      super(id, email, name, password);
      console.log("Chamando o construtor da classe Customer");
      this.creditCard = creditCard;
    }
  
    public getCreditCard(): string {
      return this.creditCard;
    }
  }

  

    // const gabriel = new Customer('123.456.789-10', 'gabriel.ggcj@gmail.com', "Gabriel","12345678","sei lá")
    // console.log(gabriel.getCreditCard())




// Exercício 2- a) Quantas vezes a mensagem "Chamando o construtor da classe Customer" foi impressa no terminal? 
// R: APENAS UMA VEZ.

// Exercício 2- b) *Quantas vezes a mensagem `"Chamando o construtor da classe User"` foi impressa no terminal? Por quê?
// R: APENAS UMA VEZ, PORQUE COMO O CLICLO COMEÇA COM AS INFORMAÇOES DO PAI PARA O FILHO ANTES DE PASSAR PELO CUSTOMER PASSA PELO USER

// Exercício -3
// const gabriel = new Customer('123.456.789-10', 'gabriel.ggcj@gmail.com', "Gabriel","12345678","merdCard 235435253",)
//     console.log( gabriel.getId(), gabriel.getEmail(), gabriel.getName(), gabriel.getCreditCard())
//     console.log(gabriel.purchaseTotal)
// -Como apresentar os dados de total de compras

// Exercício 3 -a) Seria possível imprimir a senha (password) atrelada a essa instância? Por quê?
//R: NÃO PORQUE NÃO HÁ UMA FUNÇÃO DENTRO DA CLASSE ESTRAINDO ESSE DADO.

// Exercício -4
//
// const gabriel = new Customer('123.456.789-10', 'gabriel.ggcj@gmail.com', "Gabriel","12345678","merdCard 235435253")
    // console.log( gabriel.getId(), gabriel.getEmail(), gabriel.getName(), gabriel.getCreditCard(),gabriel.interoduceYourself())
// console.log(gabriel)
   
// Exercício -5
// const gabriel = new Customer('123.456.789-10', 'gabriel.ggcj@gmail.com', "Gabriel","12345678","merdCard 235435253")
// console.log(gabriel.interoduceYourself())
//-----------------------------------------------------------------------------------------------------------


//----------------------------------Polimorfismo---------------------------------------------//

export interface Client {
    name: string;
    // Refere-se ao nome do cliente
  
    registrationNumber: number;
    // Refere-se ao número de cadastro do cliente na concessionária
      // como se fosse um id
  
    consumedEnergy: number;
    // Refere-se à energia consumida pelo cliente no mês
  
    calculateBill(): number;
    // Retorna o valor da conta em reais
  }


  const cliente1 :Client = {
    name:"gabriel",
    registrationNumber:132131,
    consumedEnergy:50,
    calculateBill: () : number =>{
        return 2
    }
  }

//   console.log(cliente1.calculateBill())

 // Exercício 1-a)Q uais propriedades você conseguiu imprimir? Teve alguma que não foi possível? Por que isso aconteceu?
 // R: PROPRIEDADE name, registrationNumber e consumedEnergy. A função calculateBill não foi, ela apresenta [Function: calculateBill],
 // R; parece que pra fazer a função ser apresentada ela deve ser chamada como função pelo console.log

 export abstract class Place {
    constructor(protected cep: string) {}
  
      public getCep(): string {
          return this.cep;
    }
  }

//   const gabriel = new Place('123.456.789-10')


//Exercício 2-a) Mesmo sabendo que não é possível, tente criar uma instância dessa classe (ou seja: new Place(...)). Qual foi o erro que o Typescript gerou?
// R: Não é possível criar uma instância de uma classe abstrata.


//b) Pense e responda: o que precisaríamos fazer para conseguir efetivamente criar uma instância dessa classe?
//R: NÃO FAÇO IDEIA

//Exercicio 3


export class Residence extends Place {
    constructor(
      protected residentsQuantity: number,
      // Refere-se ao número de moradores da casa
  
      cep: string
    ) {
      super(cep);
    }
    public getCep(): string {
        return this.cep;
      }
      public GetResidentsQuantity(): number {
        return this.residentsQuantity
      }
  }

  const residencia1 = new Residence(12, '21330-431')
  console.log(residencia1.getCep())



  export class Commerce extends Place {
    constructor(
      protected floorsQuantity: number,
      // Refere-se à quantidade de andares do lugar
  
      cep: string
    ) {
      super(cep);
    }
    public getCep(): string {
        return this.cep;
      }
      public getFloorsQuantity(): number {
        return this.floorsQuantity
      }
  }

  const comercio1 = new Commerce(24, '21330-432')
  console.log(comercio1.getCep())


  export class Industry extends Place {
    constructor(
      protected machinesQuantity: number, 
      // Refere-se à quantidade de máquinas do local 
      
      cep: string
          ) {
          super(cep);
    }
    public getCep(): string {
        return this.cep;
    }
    public getMachinesQuantity(): number {
        return this.machinesQuantity
      }
  }

  const industria1 = new Industry(48, '21330-433')
  console.log(industria1.getCep())


// Exercício 4]
class ResidentialClient extends Residence implements Client {
    constructor(
      public name: string,
      public registrationNumber: number,
      public consumedEnergy: number,
      private cpf: string,
      residentsQuantity: number,
      cep: string
    ) {
      super(residentsQuantity, cep);
    }
  
    public getCpf(): string {
      return this.cpf;
    }
  
    public calculateBill(): number {
      return this.consumedEnergy * 0.75;
    }
  }

// Exercício 5

class CommercialClient extends Commerce implements Client {
    constructor(
      public name: string,
      public registrationNumber: number,
      public consumedEnergy: number,
      private cnpj: string,
      floorsQuantity: number,
      cep: string
    ) {
      super(floorsQuantity, cep);
    }
  
    public calculateBill(): number {
      return this.consumedEnergy * 0.53;
    }
  
    public getCnpj(): string {
      return this.cnpj;
    }
  }

  // Exercício 6

  class IndustrialClinet extends Industry implements Client {
    constructor(
      public name: string,
      public registrationNumber: number,
      public consumedEnergy: number,
      private insdustryNumber: string, // tanto faz ser string ou number
      machinesQuantity: number,
      cep: string
    ) {
      super(machinesQuantity, cep);
    }
  
    public getIndustryNumber(): string {
      return this.insdustryNumber;
    }
  
    public calculateBill(): number {
      return this.consumedEnergy * 0.45 + this.machinesQuantity * 100;
    }
  }