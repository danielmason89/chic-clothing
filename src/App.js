import React from 'react';
import {Switch, Route} from 'react-router-dom';
import { auth, createUserProfileDocument } from  './firebase/firebase.utils';
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
    this.unsubscribeFromAuth = auth.onAuthStateChanged( async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapShot => {
          this.setState({
            currentUser: {
              id: snapShot.id,
              ...snapShot.data()
            }
          });
        });
      }
      else {
        this.setState({currentUser: userAuth});
    }
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
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
