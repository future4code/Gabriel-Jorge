import React from 'react';
import styled from 'styled-components'
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import { goToLogin, goToFeedPage } from '../Components/coordinator'
import { useHistory } from 'react-router-dom';
import { useState } from 'react';

const StyledToolbar = styled(Toolbar)`
display:flex;
flex-direction: row;
justify-content: space-between

`

const Header = ({rigthButton, setRigthButton}) => {
  const history = useHistory()
  const token = localStorage.getItem("token")
  /* const [rigthButton, setRigthButton] = useState(token ? "Logout" : "Login") */


  const logout = () => {
    localStorage.removeItem("token")
  }

  const rigthButtonAction = () => {
    if (token){
      logout()
      setRigthButton("Login")
      goToLogin(history)
    }else{
      goToLogin(history)
    }
  }

  return (
    
      <AppBar position="static">
        <StyledToolbar>
          
          <Button onClick={() => goToFeedPage(history)} color="inherit">Lab-Edit</Button>
          <Button onClick={rigthButtonAction} color="inherit">{rigthButton}</Button>
        </StyledToolbar>
      </AppBar>
    
  );
}

export default Header