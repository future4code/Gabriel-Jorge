import React from "react";
import axios from "axios"
export default class TelaCadastro extends React.Component {
    state = {
        nome: "",
        email: ""
    }

    recebeNome = (event) => {
        this.setState({ nome: event.target.value })
    }

    recebeEmail = (event) => {
        this.setState({ email: event.target.value })
    }

    fazerCadastro = () => {
        const url = "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users"
        const bory = {
            name: this.state.nome,
            email: this.state.email
        }
        axios.post(url, bory, {
            headers: {
                Authorization: "gabriel-Jorge-carver"
            }
        })
        .then((res) => {console.log(res)})
        .catch((err) => {console.log(err)})
    }

    render() {
        return (
            <div>
                <button onClick={this.props.irParaLista}>Ir para lista de usuarios</button>
                <h2>Cadastro</h2>
                <input
                    placeholder={"nome"}
                    value={this.state.nome}
                    onChange={this.recebeNome}
                />
                <input
                    placeholder={"E-mail"}
                    value={this.state.email}
                    onChange={this.recebeEmail} />
                <button onClick={this.fazerCadastro}>Cadastrar</button>
            </div>

        )
    }
}