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

const Homepage = () => {
    
    const history = useHistory()
    const irParaListaDeViagens = () => {
        history.push("/listaViagens")
    }
    const irParaAreaLogin = () => {
        history.push("/paginaLogin")
    }

    return(
        <div>
            <iframe src="https://giphy.com/embed/l0IylQoMkcbZUbtKw" width="480" height="360" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/house-home-real-estate-l0IylQoMkcbZUbtKw">via GIPHY</a></p>
            <h2>LabeX</h2>
            <Button onClick={irParaListaDeViagens}>Viagens</Button>
            <Button onClick={irParaAreaLogin}>Area Admin</Button>
        </div>
    )




}

export default Homepage