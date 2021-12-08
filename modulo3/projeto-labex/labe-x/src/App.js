import Homepage from './components/1-Homepage';
import ListaDeViagens from './components/2-ListaDeViagens';
import PaginaInscricaoViagem from './components/3-PaginaIncricaoViagem';
import PaginaLogin from './components/4-Login';
import PainelAdministrativo from './components/5-PainelAdministrativo';
import { useState } from 'react' 
import InformacoesDeViagem from './components/7-InformaçoesDeViagem';
import CriarViagem from './components/6-CriarViajem';
import PaginaErro from './components/8-PaginaDeErro';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import styled from 'styled-components';






const App = () => {
// const [ telaAtual, setTelaAtual] = useState("homepage")

//   const escolherTela = () =>{
//     switch (telaAtual){
//       case "homepage":
//         return <Homepage/>
//       case "listaDeViagens":
//         return <ListaDeViagens/>
//       case "paginaInscrViagem":
//         return <PaginaInscricaoViagem/>
//       case "paginaLogin":
//         return <PaginaLogin/>
//       case "painelAdministrativo":
//         return <PainelAdministrativo/>
//       case "criarViagem":
//         return <CriarViagem/>
//       case "informacoesDeViagem":
//         return <InformacoesDeViagem/>

//       default:
//         return <Homepage/>
//     }
//   }

//   const vaiHomePage = () => {
//     setTelaAtual("homepage")

//   }
//   const vaiListaDeViagens = () => {
//     setTelaAtual("listaDeViagens")
  
//   }










  return (
      <BrowserRouter>
        <Switch> 


        <Route exact path={"/"}>
          <Homepage/>
        </Route>

        <Route exact path={"/listaViagens"}>
          <ListaDeViagens/>
        </Route>

        <Route exact path={"/paginaInscricaoViagem"}>
          <PaginaInscricaoViagem/>
        </Route>

        <Route exact path={"/paginaLogin"}>
          <PaginaLogin/>
        </Route>

        <Route exact path={"/painelAdministrativo"}>
          <PainelAdministrativo/>
        </Route>

        <Route exact path={"/criarViagem"}>
          <CriarViagem/>
        </Route>

        <Route exact path={"/informacoesDeViagem"}>
          <InformacoesDeViagem/> 
        </Route>


        <Route>
          <PaginaErro/> 
        </Route>
        
          
       </Switch>
     </BrowserRouter>
  );
}

export default App;
