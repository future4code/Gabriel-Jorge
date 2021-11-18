import React from "react";
import react from "react";

export default class TelaListaUsuario extends React.Component {
    render() {
        return (
            <div>
                <button onClick={this.props.irParaCadastro}>Ir Para cadastro de Usuarios</button>
                <h2>Lista de Usuarios</h2>
            </div>
        )
    }
}