import React from "react"
import { useHistory } from "react-router-dom"
import styled from "styled-components"
import { Geral } from "../style/styleGeral"


const PaginaInscricaoViagem = () => {

    const history = useHistory()
    const voltar = () => {
        history.goBack()
    }

    return(
        <Geral>
        <h1> Inscreva-se </h1>
            <select></select>
            <input placeholder={"   Nome"}></input>
            <input placeholder={"   Idade"}></input>
            <input placeholder={"   Texto de candidatura"}></input>
            <input placeholder={"   Profissão"}></input>
            <select></select>
            <div>
            <button onClick={voltar}>Voltar</button>
            <button>Enviar</button>
            </div>
            
            
        </Geral>
    )

}

export default PaginaInscricaoViagem    