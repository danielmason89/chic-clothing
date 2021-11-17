import React, { useEffect } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
// Styles
import GlobalStyle from "./components/GlobalStyle";
// Components
import Header from "./components/header/Header.component";
import Homepage from "./pages/homepage/Homepage.component";
import ShopPage from "./pages/shop/Shop.component";
import UserSignInUpPage from "./pages/userSignInUpPage/userSignInUpPage.component";
import CheckOut from "./pages/checkout/CheckOut.component";
import { selectCurrentUser } from "./redux/user/user.selectors";
import { checkUserSession } from "./redux/user/user.actions";

const App = () => {
  const currentUser = useSelector(selectCurrentUser);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(checkUserSession());
  }, [dispatch]);

  return (
    <div>
      <GlobalStyle />
      <Header />
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route path="/shop" component={ShopPage} />
        <Route exact path="/checkout" component={CheckOut} />
        <Route
          exact
          path="/sign-in"
          render={() =>
            currentUser ? <Redirect to="/" /> : <UserSignInUpPage />
          }
        />
      </Switch>
    </div>
  );
};

export default App;
