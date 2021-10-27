import React from 'react';
import {Switch, Route} from 'react-router-dom';
import { auth, createUserProfileDocument } from  './firebase/firebase.utils';
import { connect } from 'react-redux';
import { setCurrentUser } from './redux/user/user.actions';
// Styles
import GlobalStyle from './components/GlobalStyle';
// Components
import Header from './components/header/Header.component'
import Homepage from './pages/homepage/Homepage.component';
import ShopPage from './pages/shop/Shop.component';
import UserSignInUpPage from './pages/userSignInUpPage/userSignInUpPage.component';


class App extends React.Component {
  unsubscribeFromAuth = null

  componentDidMount() {
    const {setCurrentUser} = this.props;

    this.unsubscribeFromAuth = auth.onAuthStateChanged( async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapShot => {
           setCurrentUser({
              id: snapShot.id,
              ...snapShot.data()
            });
        });
      }
      else {
        setCurrentUser(userAuth);
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
    <Header />
      <Switch>
      <Route exact path='/' component={Homepage} />
      <Route path='/shop' component={ShopPage} />
      <Route path='/sign-in' component={UserSignInUpPage} />
      </Switch>
    </div>
  );
}
}

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
});

export default connect(null, mapDispatchToProps)(App);
