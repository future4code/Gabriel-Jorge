import React from 'react'
// import './CardPequeno.css'
import {CardPequenoContainer} from "./style"



function CardPequeno(props){
    return(

        <CardPequenoContainer
            className='littlecard-container'>
            <img src={ props.imagem}/>
            <div>
                <h4> {props.descricao} </h4>
                <p> {props.valor} </p>
            </div>
        </CardPequenoContainer>
    )
}

export default CardPequeno;