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



const PaginaLogin = () => {

    const history = useHistory()
    const voltar = () => {
        history.goBack()
    }


    return(    
        <div>    
            <h2> Pagina Login ok </h2>    
            <Button onClick={voltar}>Voltar</Button>
            <Button>Logar</Button>
        </div>    
    
    )  
    
    
    
}
    
    export default PaginaLogin