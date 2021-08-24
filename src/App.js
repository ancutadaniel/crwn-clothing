import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import Header from './components/header/header.component';
import HomePage from './pages/homepage/homepage.component';
import Shop from './pages/shop/shop.component';
import Checkout from './pages/checkout/checkout.component';
import SignInSignUpPage from './pages/sign-in-sign-up/sign-in-sign-up.component';

//redux sagas actions
import { selectCurrentUser } from './redux/user-reducer/user.selector';
import { createStructuredSelector } from 'reselect';
import { checkUserSession } from './redux/user-reducer/user-actions';

import './App.css';

class App extends React.Component {
  componentDidMount() {
    const { checkUserSession } = this.props;
    checkUserSession();
  }

  componentWillUnmount() {}

  render() {
    return (
      <div className='App'>
        <Header />
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route path='/shop' component={Shop} />
          <Route
            exact
            path='/signin'
            render={() =>
              this.props.user ? <Redirect to='/' /> : <SignInSignUpPage />
            }
          />
          <Route exact path='/checkout' component={Checkout} />
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  user: selectCurrentUser,
});

const mapDispatchToProps = (dispatch) => ({
  checkUserSession: () => dispatch(checkUserSession()),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
