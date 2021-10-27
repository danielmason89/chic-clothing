import React from 'react';
import {Switch, Route} from 'react-router-dom';
import { auth } from  './firebase/firebase.utils';
// Styles
import GlobalStyle from './components/GlobalStyle';
// Components
import Header from './components/header/Header.component'
import Homepage from './pages/homepage/Homepage.component';
import ShopPage from './pages/shop/Shop.component';
import UserSignInUpPage from './pages/userSignInUpPage/userSignInUpPage.component';


class App extends React.Component {
  constructor() {
    super();

    this.state = {
      currentUser: null
    }
  }

  unsubscribeFromAuth = null

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(user => {
      this.setState({ currentUser: user });

    })
  }

  componentWillUnmount() {
    this.unSubscribeFromAuth();
  }


  render() {
  return (
    <div>
    <GlobalStyle />
    <Header currentUser={this.state.currentUser} />
      <Switch>
      <Route exact path='/' component={Homepage} />
      <Route path='/shop' component={ShopPage} />
      <Route path='/sign-in' component={UserSignInUpPage} />
      </Switch>
    </div>
  );
}
}

export default App;
