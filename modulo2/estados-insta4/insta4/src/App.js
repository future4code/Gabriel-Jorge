import React from 'react';
import styled from 'styled-components'
import Post from './components/Post/Post';

const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`

class App extends React.Component {
  render() {
    return (
      <MainContainer>
        <Post
          nomeUsuario={'paulinha'}
          fotoUsuario={'https://picsum.photos/50/50'}
          fotoPost={'https://cdn.pixabay.com/photo/2016/02/10/21/59/landscape-1192669__480.jpg'}
        />
        <Post
          nomeUsuario={'Gabriel J'}
          fotoUsuario={'https://ca.slack-edge.com/TLAVDH7C2-U02FS9MQ78C-c4b583814789-72'}
          fotoPost={'https://picsum.photos/200/150'}
        />
        <Post
          nomeUsuario={'Thayna J'}
          fotoUsuario={'https://ca.slack-edge.com/TLAVDH7C2-U02FH2Z8XC5-cf4702f0db3e-192'}
          fotoPost={'https://static5.depositphotos.com/1003699/519/i/600/depositphotos_5195962-stock-photo-sunset-in-the-field.jpg'}
        />
      </MainContainer>
    );
  }
}

export default App;
