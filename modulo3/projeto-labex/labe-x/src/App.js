import './App.css';
import Homepage from './components/1-Homepage';
import ListaDeViagens from './components/2-ListaDeViagens';
import PaginaInscricaoViagem from './components/3-PaginaIncricaoViagem';
import PaginaLogin from './components/4-Login';
import PainelAdministrativo from './components/5-PainelAdministrativo';
import { useState } from 'react'
import InformacoesDeViagem from './components/7-InformaçoesDeViagem';
import CriarViagem from './components/6-CriarViajem';

const App = () => {
const [ telaAtual, setTelaAtual] = useState("informacoesDeViagem")

  const escolherTela = () =>{
    switch (telaAtual){
      case "homepage":
        return <Homepage/>
      case "listaDeViagens":
        return <ListaDeViagens/>
      case "paginaInscrViagem":
        return <PaginaInscricaoViagem/>
      case "paginaLogin":
        return <PaginaLogin/>
      case "painelAdministrativo":
        return <PainelAdministrativo/>
      case "criarViagem":
        return <CriarViagem/>
      case "informacoesDeViagem":
        return <InformacoesDeViagem/>

      default:
        return <Homepage/>

    }

  }

  const vaiHomePage = () => {
    setTelaAtual("homepage")

  }
  const vaiListaDeViagens = () => {
    setTelaAtual("listaDeViagens")
  
  }






  return (
    <div>
      {/* <Homepage/>
      <ListaDeViagens/> */}
       {escolherTela()}
    </div>
  );
}

export default App;
