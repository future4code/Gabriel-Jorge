import axios from "axios"
import React from "react"
import { useHistory } from "react-router-dom"
import styled from "styled-components"
import { Geral } from "../style/styleGeral"
import { useState } from 'react'



const DivO = styled.div`
padding-top: 10px;


`



const PaginaLogin = () => {

    const [email, setEmail] = useState("")
    const [senha, setSenha] = useState("")


    const mudarEmail = (event) => {
        setEmail(event.target.value)
    }
    const mudarSenha = (event) => {
        setSenha(event.target.value)
    }

    const autorizationName = "gabriel-jorge-carver"

    const alunoName = "gabriel"


    const submeterLogin = () => {
        console.log(email,senha)
        const bory = {
            email:email,
            senha:senha
        }
        axios.post(`https://us-central1-labenu-apis.cloudfunctions.net/labeX/${alunoName}/login`,bory)
        .then((res) => {
            console.log("deu certo!!!" ,res.data)

        })
        .catch((err) => {
            console.log("deu bosta", err.response)
        })
    }

    const history = useHistory()
    const voltar = () => {
        history.goBack()
    }


    return(    
        <Geral>   
                
            <h1>Login</h1>                 
                <input 
                placeholder={"     Email"}
                type="email"
                value={email}
                onChange={mudarEmail}
                />
                
                <input placeholder={"     Senha"}
                type="senha"
                value={senha}
                onChange={mudarSenha}
                />


                <DivO>
                <button onClick={voltar}>Voltar</button>
                <button onClick={submeterLogin}>Logar</button>
            </DivO>
        </Geral>    
    
    )  
    
    
    
}
    
    export default PaginaLogin