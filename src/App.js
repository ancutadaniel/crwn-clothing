import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Header from './components/header/header.component';
import HomePage from './pages/homepage/homepage.component';
import Shop from './pages/shop/shop.component';
import SignInSignUp from './components/sign-in-sign-up/sign-in-sign-up.component';

import './App.css';

export const TopicDetails = (props) => {
  console.log(props);
  return (
    <div>
      <h1>TopicDetailsPage</h1>
    </div>
  );
};

function App() {
  return (
    <div className='App'>
      <Header />
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route exact path='/shop' component={Shop} />
        <Route exact path='/signin' component={SignInSignUp} />
      </Switch>
    </div>
  );
}

export default App;
