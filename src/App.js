import React from 'react';
import {Switch, Route} from 'react-router-dom';
// Styles
import GlobalStyle from './components/GlobalStyle';
// Components
import Header from './components/header/Header.component'
import Homepage from './pages/homepage/Homepage.component';
import ShopPage from './pages/shop/Shop.component';


function App() {
  return (
    <div>
    <GlobalStyle />
    <Header/>
      <Switch>
      <Route exact path='/' component={Homepage} />
      <Route path='/shop' component={ShopPage} />
      </Switch>
    </div>
  );
}

export default App;
