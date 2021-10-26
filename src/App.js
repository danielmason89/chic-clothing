import React from 'react';
import GlobalStyle from './components/GlobalStyle';
import Homepage from './pages/homepage/Homepage.component';
import ShopPage from './pages/shop/Shop.component';
import {Switch, Route} from 'react-router-dom';


function App() {
  return (
    <div>
    <GlobalStyle />
      <Switch>
      <Route exact path='/' component={Homepage} />
      <Route path='/shop' component={ShopPage} />
      </Switch>
    </div>
  );
}

export default App;
