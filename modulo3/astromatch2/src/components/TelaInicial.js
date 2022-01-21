// import React from 'react'
// import App from '../App'
import styled from "styled-components"

const StyledTelaInicial = styled.div`

img{
    border-radius: 10px 10px 10px 10px;
    height: 300px;
    width: 300px;
    object-fit: cover;
    object-position: center;
    padding: 5px

}


`











const TelaInicial = (props) => {
return(
    <StyledTelaInicial>
        <div>  
        <img src={`${props.userPhoto}`}/>
        <h4>{props.userName}, {props.userAge}</h4> 
        <p>{props.userBio}</p>
        </div>
        <div>
        <h3> Tela Inicial </h3>
        <button onClick={props.vaiPaginaMatch}>Tela Match</button>
        <button onClick={props.vaiPaginaMusicas}>Tela Musicas</button>
        <br/>
        <button onClick={()=> {props.choosePerson(true)}}>Quero</button>
        <button onClick={()=> {props.choosePerson(false)}}>Não quero</button>
        </div>
    
    </StyledTelaInicial>


)
}

export default TelaInicial