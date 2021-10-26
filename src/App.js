import React from 'react';
import GlobalStyle from './components/GlobalStyle';
import Homepage from './pages/homepage/Homepage.component';
import {Switch, Route} from 'react-router-dom';


const HatsPage = () => {
  return (
    <div>
      <h1>HatsPage</h1>
    </div>
)
  };



function App() {
  return (
    <div>
    <GlobalStyle />
      <Switch>
      <Route exact path='/' component={Homepage} />
      <Route path='/hats' component={HatsPage} />
      </Switch>
    </div>
  );
}

export default App;
