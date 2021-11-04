import React from 'react';
import './App.css';
import CardGrande from './components/CardGrande/CardGrande';
import ImagemButton from './components/ImagemButton/ImagemButton';
import CardPequeno from "./components/CardPequeno/CardPequeno";
import styled from "styled-components"









function App() {
  return (
    <div className="App">
      <div className="page-section-container">
        <h2>Dados pessoais</h2>
        <CardGrande 
          imagem ="https://ca.slack-edge.com/TLAVDH7C2-U02FS9MQ78C-c4b583814789-192" 
          nome="Gabriel Jorge" 
          descricao="Oi, Eu sou Gabriel Jorge, tenho 28 anos e sou do Rio de Janeiro, sou aspirante a desenvolvedor Full Stack."
        />
        
        <ImagemButton 
          imagem="https://image.flaticon.com/icons/png/512/117/117472.png" 
          texto="Ver mais"
        />
      </div>

      <div className="page-section-container">
      <CardPequeno
        imagem="C:\Users\Book S do Gabriel\OneDrive\Documentos\Labenu\Gabriel-Jorge\modulo2\props-labedin\labedin\src\Recursos\email .jpg"
        descricao = "Email"
        valor = "ggcj.333@hotmail.com"
        />
      </div>

      <div className="page-section-container">
      <CardPequeno
        imagem="../Recursos/email .jpg"
        descricao = "Endereço"
        valor = "Rua da minha casa "
        />
        </div>


      <div className="page-section-container">
        <h2>Experiências profissionais</h2>
        <CardGrande 
          imagem="https://s3.amazonaws.com/future4.com.br/static/headf4-c492117ca2373dc85ca81bf715b3dc2a.png" 
          nome="Labenu" 
          descricao="Formando desenvolvedores para o mercado de trabalho!" 
        />
        
        <CardGrande 
          imagem="https://imagens.canaltech.com.br/empresas/4418.400.jpg" 
          nome="NASA" 
          descricao="Apontando defeitos." 
        />
      </div>

      {/* <div className="page-section-container">
        <h2>Minhas redes sociais</h2>
        <ImagemButton 
          imagem="https://d2v9ipibika81v.cloudfront.net/uploads/sites/261/2017/01/facebook-logo-3.png" 
          texto="Facebook" 
        />        

        <ImagemButton 
          imagem="https://logodownload.org/wp-content/uploads/2014/09/twitter-logo-1-1.png" 
          texto="Twitter" 
        />        
      </div> */}
    </div>
  );
}

export default App;
