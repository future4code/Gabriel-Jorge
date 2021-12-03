import TelaInicial from "./components/TelaInicial";
import TelaMatch from "./components/TelaMatch";
import TelaMusica from "./components/TelaMusica";
import { useState } from 'react'
import axios from "axios"


const App = () => {

  const [telaAtual, setTelaAtual] = useState("apreTelaMatch")
  const escolherTela = () => {
    switch (telaAtual){
      case "apreTelaInicial":
        return <TelaInicial
        vaiPaginaMatch={vaiPaginaMatch}
        />

      case "apreTelaMatch":
        return <TelaMatch
        vaiPaginaInicial={vaiPaginaInicial}        
        />
      
      case "apreTelaMusica":
        return <TelaMusica 
        vaiPaginaMusicas={vaiPaginaMusicas}/>

      default: 
        return <TelaInicial/>
    }
  }

  // const trocaTela = () => {
  //   if (telaAtual === "apreTelaInicial"){
  //     setTelaAtual("apreTelaMatch")
  //   } else{
  //     setTelaAtual("apreTelaInicial")
  //   }
  
  // }

const vaiPaginaMatch = () => {
  setTelaAtual("apreTelaMatch")

}

const vaiPaginaInicial = () => {
  setTelaAtual("apreTelaInicial")

}

const vaiPaginaMusicas = () => {
  setTelaAtual("apreTelaMusica")

}

  const autorizationName = "gabriel-jorge-carver"
  const alunoName = "gabriel"

  const getPerfilUsuario = () => {
  const url = `https://us-central1-missao-newton.cloudfunctions.net/astroMatch/${alunoName}/person`
    axios.get( url, {
      headers: { Authorization: `${autorizationName}`}
    }).then((res) => {
      console.log(res.data.profile)
      
    }).catch((err) => {
      console.log(err.response)
      alert("Mano, deu Rum !!!")
    })
}



  return (
    <div>
      <h3>ASTROMATCH</h3>
      {/* <button onClick={trocaTela}>Trocar Tela</button> */}

      <button onClick={vaiPaginaMatch}>Tela Match</button>
      <button onClick={vaiPaginaInicial}>TelaInicial</button>
      <button onClick={vaiPaginaMusicas}>Escolha uma musica</button>

      <button onClick={getPerfilUsuario}>Proximo Perfil</button>
        {escolherTela()}
       
    </div>
  );
}

export default App;
