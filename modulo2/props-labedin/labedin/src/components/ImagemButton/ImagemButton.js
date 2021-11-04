import React from 'react';
// import './ImagemButton.css'
import {ImagemButtonContainer} from "./style"


function ImagemButton(props) {
    return (
        <ImagemButtonContainer
         className="image-button-container">
            <img src={ props.imagem }/>
            <p>{ props.texto }</p>
        </ImagemButtonContainer>

    )
}

export default ImagemButton;