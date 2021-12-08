import React from "react"
import { useHistory } from "react-router-dom"
import styled from "styled-components"


const Button = styled.button`
    color: black;
    font-size: 1em;
    margin: 1em;
    padding: 2px solid palevioletred;
    border: 2px solid palevioletred;
    border-radius: 3px;
    `




const ListaDeViagens = () => {

    const history = useHistory()
    const voltar = () => {
        history.goBack()
    }
    const irParaPaginaInscricao = () => {
        history.push("/paginaInscricaoViagem")
    }


    return(    
        <div>  
            <iframe src="https://giphy.com/embed/ZeQEuIJlfbhao" width="480" height="270" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/guy-bicycle-suite-ZeQEuIJlfbhao">via GIPHY</a></p>            
            <Button onClick={voltar}>Voltar</Button>
            <Button onClick={irParaPaginaInscricao}>Inscrever-se</Button>
            <h2> ListaDeViagens ok </h2>    
        </div>    
    
    )  
    
    
    
}
    
    export default ListaDeViagens