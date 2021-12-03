import React from 'react'
import App from '../App'

const TelaInicial = (props) => {

return(
    <div>
        <h3> Tela Inicial </h3>
        <button onClick={props.vaiPaginaMatch}>Tela Match</button>
        <button onClick={props.vaiPaginaMusicas}>Tela Musicas</button>
    
    </div>


)
}

export default TelaInicial