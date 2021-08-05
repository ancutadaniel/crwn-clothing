import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Header from './components/header/header.component';
import HomePage from './pages/homepage/homepage.component';
import Shop from './pages/shop/shop.component';
import SignInSignUp from './components/sign-in-sign-up/sign-in-sign-up.component';
import { auth, createUserProfileDocument } from './firebase/firebase.utils';

import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: null,
    };
  }

  unsubscribeFromAuth = null;

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async (user) => {
      if (user) {
        const userRef = await createUserProfileDocument(user);

        userRef.onSnapshot((userSnapShot) => {
          this.setState({
            user: {
              id: userSnapShot.id,
              ...userSnapShot.data(),
            },
          });
        });
      } else {
        this.setState({ user });
      }
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    const { user } = this.state;
    return (
      <div className='App'>
        <Header user={user} />
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route exact path='/shop' component={Shop} />
          <Route exact path='/signin' component={SignInSignUp} />
        </Switch>
      </div>
    );
  }
}

export default App;
