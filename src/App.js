import React from 'react';
import { Switch, Route } from 'react-router-dom';

import HomePage from './pages/homepage/homepage.component';
import Shop from './pages/shop/shop.component';

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
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route exact path='/shop' component={Shop} />
      </Switch>
    </div>
  );
}

export default App;
