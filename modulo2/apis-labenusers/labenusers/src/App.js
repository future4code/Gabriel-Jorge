import React from "react";
import axios from "axios";
import TelaCadastro from "./components/TelaCadastro";
import TelaListaUsuario from "./components/TelaListaUsuario";

export default class App extends React.Component {
  state= {
    telaAtual: "cadastro"
  }
    
  escolheTela = () => {
    switch(this.state.telaAtual){
      case "cadastro":
        return <TelaCadastro irParaLista={this.irParaLista}/>
      case "lista":
        return <TelaListaUsuario irParaCadastro={this.irParaCadastro}/> 
      default: 
        return <div>Erro !!! Pagina Não Encontrada</div>
    }
  } 

  irParaCadastro = () => {
    this.setState({telaAtual: "cadastro"})
  }

  irParaLista = () => {
    this.setState({telaAtual: "lista"})
  }



  render() {
    return (

      <div>
        {this.escolheTela()}
      </div>
    );
  }
}

