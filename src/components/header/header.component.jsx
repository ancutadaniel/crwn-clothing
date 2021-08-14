import React from 'react';
import { connect } from 'react-redux';
import { auth } from '../../firebase/firebase.utils';
import { ReactComponent as Logo } from '../../assets/crown.svg';

import CartIcon from '../cart-icon/cart-icon.component';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';

import { userClick } from '../../redux/user-reducer/user-actions';

import { createStructuredSelector } from 'reselect';
import { selectCartToggle } from '../../redux/cart-reducer/cart.selectors';
import { selectCurrentUser } from '../../redux/user-reducer/user.selector';

import {
  HeaderContainer,
  LogoContainer,
  OptionsContainer,
  OptionLink,
} from './header.styles';

const mapStateToProps = createStructuredSelector({
  user: selectCurrentUser,
  showCart: selectCartToggle,
});

const mapDispatchToProps = (dispatch) => {
  return {
    localFunction: (text) => dispatch(userClick(text)),
  };
};

const Header = ({ user, showCart, localFunction }) => {
  return (
    <HeaderContainer>
      <LogoContainer to='/'>
        <Logo />
      </LogoContainer>
      <OptionsContainer>
        <OptionLink to='/shop'>Shop</OptionLink>
        <OptionLink to='/contact'>Contact</OptionLink>
        {user ? (
          <OptionLink as='div' onClick={() => auth.signOut()}>
            {' '}
            Sign Out{' '}
          </OptionLink>
        ) : (
          <OptionLink to='/signin'>Sign In</OptionLink>
        )}
        <CartIcon />
      </OptionsContainer>
      {showCart && <CartDropdown />}
    </HeaderContainer>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
