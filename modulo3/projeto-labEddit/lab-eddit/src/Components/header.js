import React from 'react';
import styled from 'styled-components'
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import { goToLogin, goToFeedPage } from '../Components/coordinator'
import { useHistory } from 'react-router-dom';


const StyledToolbar = styled(Toolbar)`
display:flex;
flex-direction: row;
justify-content: space-between

`

const Header = () => {
  const history = useHistory()

  return (
    
      <AppBar position="static">
        <StyledToolbar>
          
          <Button onClick={() => goToFeedPage(history)} color="inherit">Lab-Edit</Button>
          <Button onClick={() => goToLogin(history)} color="inherit">Login</Button>
        </StyledToolbar>
      </AppBar>
    
  );
}

export default Header