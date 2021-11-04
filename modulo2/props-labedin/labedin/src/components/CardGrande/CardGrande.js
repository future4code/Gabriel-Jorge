import React from 'react';
// import './CardGrande.css'
import {CardGrandeContainer} from "./style"



function CardGrande(props) {
    return (
        <CardGrandeContainer
         className="bigcard-container">
            <img src={ props.imagem } />
            <div>
                <h4>{ props.nome }</h4>
                <p>{ props.descricao }</p>
            </div>
        </CardGrandeContainer>
    )
}

export default CardGrande;