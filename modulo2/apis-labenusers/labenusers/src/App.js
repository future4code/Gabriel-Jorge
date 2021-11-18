import React from "react";
import axios from "axios";

export default class App extends React.Component {
  state = {
    usuario: [],
    inputValueName: "",
    inputValueEmail: ""
  }

  componentDidMount = () => {
    this.postCreateUser();
  };

  handleInputChangeNome = (event) => {
    this.setState({ inputValueName: event.target.value })
  }

  handleInputChangeEmail = (event) => {
    this.setState({ inputValueEmail: event.target.value })
  }

  postCreateUser = () => {
    const body = {
      name: this.state.inputValueName,
      email: this.state.inputValueEmail
    }
    axios
      .post(
        "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users",
        body,
        {
          headers: {
            Authorization: "thayna-saad-carver",
          }
        }
      )
      .then((response) => {
        console.log(response.data)
        //this.setState({usuario: response.data})
      })
      .catch((error) => {
        console.log(error.response.data)
      })
  }

  render() {
    return (
     <div>
       <button>Lista de Usuários</button>
       <h1>Cadastro de Usuarios</h1>
       <input 
       placeholder = {"nome"}
       value = {this.state.inputValueName}
       onChange = {this.handleInputChangeNome}/>
       <input
       placeholder = {"email"}
       value = {this.state.inputValueEmail}
       onChange = {this.state.handleInputChangeEmail}/>
       <button onClick ={this.postCreateUser}>Adicionar</button>

    </div>
    )
  }
}