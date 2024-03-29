import react from 'react';
import { useState } from 'react';
import LoginPage from './Pages/1- login_page';
import RegisterPage from './Pages/2- register_page';
import FeedPage from './Pages/3- feed_page';
import PostPage from './Pages/4- post_page';
import ErrorPage from './Pages/5- error_page';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import './App.css';
import styled from 'styled-components'
import theme from './Constatnts/theme';
import { ThemeProvider } from '@material-ui/core/styles'
import Header from './Components/header';

const DivO = styled.div`

color:white;
` 



function App() {
  const token = localStorage.getItem("token")
  const [rigthButton, setRigthButton] = useState(token ? "Logout" : "Login")



  return (
    <ThemeProvider theme={theme}>
        <BrowserRouter>
        <Header 
        rigthButton={rigthButton}
        setRigthButton={setRigthButton}
        />
            <Switch>

                <Route exact path={"/"}> 
                  <LoginPage
                  setRigthButton={setRigthButton}
                  />
                </Route>

                <Route exact path={"/registerPage"}>
                  <RegisterPage
                  setRigthButton={setRigthButton}
                  />
                </Route>

                <Route exact path={"/feedPage"}>
                  <FeedPage/>
                </Route>

                <Route exact path={"/postPage/:id"}>
                  <PostPage/>
                </Route>

                <Route>
                  <ErrorPage/>
                </Route>

              </Switch>              
        </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
