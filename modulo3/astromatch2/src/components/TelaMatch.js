import React from 'react'
import styled from "styled-components"

const StyledTelaMatch = styled.div`
display: flex;
flex-wrap: wrap;
img{
    border-radius: 50%;
    height: 70px;
    width: 70px;
    object-fit: cover;
    object-position: center;
    padding: 5px
    }
`


const TelaMatch = (props) => {
const renderMatches = props.matchesList.map((pessoa) => {
return (
            <div key={props.id}>
                <img src={`${pessoa.photo}`}/>
                <p>{pessoa.name}</p>
            </div>
        )
})

    return( 
        <div>
            <StyledTelaMatch>
            {renderMatches}
            </StyledTelaMatch>
            <h3>Tela Match Ok</h3>
            <button onClick={props.vaiPaginaInicial}>TelaInicial</button>
            <button onClick={props.limpar}>Limpar Tela</button>
        </div>
        )
}

export default TelaMatch
