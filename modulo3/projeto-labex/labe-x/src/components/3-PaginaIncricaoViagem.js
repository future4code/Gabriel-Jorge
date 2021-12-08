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

const PaginaInscricaoViagem = () => {

    const history = useHistory()
    const voltar = () => {
        history.goBack()
    }

    return(
        <div>
            <iframe src="https://giphy.com/embed/AXJoiBd1axmhLxX7PI" width="480" height="480" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/Phinxlab-dance-dancing-phinx-AXJoiBd1axmhLxX7PI">via GIPHY</a></p>
            <h2> PaginaInscricaoViagem ok </h2>
            <Button onClick={voltar}>Voltar</Button>
            <Button>Enviar</Button>
        </div>
    )

}

export default PaginaInscricaoViagem