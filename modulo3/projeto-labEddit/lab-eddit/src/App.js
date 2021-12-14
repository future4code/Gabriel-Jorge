import LoginPage from './Pages/1- login_page';
import RegisterPage from './Pages/2- register_page';
import FeedPage from './Pages/3- feed_page';
import PostPage from './Pages/4- post_page';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import './App.css';


function App() {
  return (
    <BrowserRouter>
     <Switch>

        <Route exact path={"/"}> 
          <LoginPage/>
        </Route>

        <Route exact path={"/registerPage"}>
          <RegisterPage/>
        </Route>

        <Route exact path={"/feedPage"}>
          <FeedPage/>
        </Route>

        <Route exact path={"/postPage"}>
          <PostPage/>
        </Route>


      </Switch>
    </BrowserRouter>
  );
}

export default App;
