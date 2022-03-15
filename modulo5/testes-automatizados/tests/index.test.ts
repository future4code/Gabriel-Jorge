import { performPurchase } from "../src"
import { User } from "../src/Model/UserCash"



describe("teste com um usuário com o saldo maior do que o valor de compra",() => {

    test("", ()=> {
        const user: User = {
            name: "fulano",
            balance: 100
        }
        const result = performPurchase(user, 40)

        expect(result).toEqual({
            name:"fulano",
            balance: 60
        })
    })
})
//------------------------------------------------------------------------------------------
//------------------------------------------------------------------------------------------
describe("teste com um usuário com o saldo igual ao valor de compra",() => {

    test("", ()=> {
        const user: User = {
            name: "fulano",
            balance: 100
        }
        const result = performPurchase(user, 40)

        expect(result).toEqual({
            name:"fulano",
            balance: 60
        })
    })
})
//------------------------------------------------------------------------------------------
//------------------------------------------------------------------------------------------
describe("Faça um teste com um usuário com o saldo menor do que o valor de compra",() => {

    test("", ()=> {
        const user: User = {
		name: "Astrodev",
		balance: 30
        }
        const result = performPurchase(user, 50)
	
	    expect(result).not.toBeDefined()
	
        
    })
})