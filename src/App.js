import React from 'react';
import {Switch, Route} from 'react-router-dom';
// Styles
import GlobalStyle from './components/GlobalStyle';
// Components
import Header from './components/header/Header.component'
import Homepage from './pages/homepage/Homepage.component';
import ShopPage from './pages/shop/Shop.component';
import UserSignInUpPage from './pages/userSignInUpPage/userSignInUpPage.component';


function App() {
  return (
    <div>
    <GlobalStyle />
    <Header/>
      <Switch>
      <Route exact path='/' component={Homepage} />
      <Route path='/shop' component={ShopPage} />
      <Route path='/sign-in' component={UserSignInUpPage} />
      </Switch>
    </div>
  );
}

export default App;
