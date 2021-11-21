import React, { useEffect, lazy, Suspense } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { selectCurrentUser } from "./redux/user/user.selectors";
import { checkUserSession } from "./redux/user/user.actions";
// Styles
import GlobalStyle from "./components/GlobalStyle";
// Components
import BoundaryError from "./components/error-boundary/BoundaryError.component";
import Header from "./components/header/Header.component";
import Spinner from "./components/spinner/Spinner.component";
const HomePage = lazy(() => import("./pages/homepage/Homepage.component"));
const ShopPage = lazy(() => import("./pages/shop/Shop.component"));
const CheckOut = lazy(() => import("./pages/checkout/CheckOut.component"));
const UserSignInUpPage = lazy(() =>
  import("./pages/userSignInUpPage/userSignInUpPage.component")
);

const App = () => {
  const currentUser = useSelector(selectCurrentUser);
  const dispatch = useDispatch();

  useEffect(() => {
    checkUserSession();
  }, [dispatch]);

  return (
    <div>
      <GlobalStyle />
      <Header />
      <Switch>
        <BoundaryError>
          <Suspense fallback={<Spinner />}>
            <Route exact path="/" component={HomePage} />
            <Route path="/shop" component={ShopPage} />
            <Route exact path="/checkout" component={CheckOut} />
            <Route
              exact
              path="/sign-in"
              render={() =>
                currentUser ? <Redirect to="/" /> : <UserSignInUpPage />
              }
            />
          </Suspense>
        </BoundaryError>
      </Switch>
    </div>
  );
};

export default App;
