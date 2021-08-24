import React from 'react';
import { connect } from 'react-redux';
import { ReactComponent as Logo } from '../../assets/crown.svg';

import CartIcon from '../cart-icon/cart-icon.component';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';

import { createStructuredSelector } from 'reselect';
import { selectCartToggle } from '../../redux/cart-reducer/cart.selectors';
import { selectCurrentUser } from '../../redux/user-reducer/user.selector';

import {
  HeaderContainer,
  LogoContainer,
  OptionLink,
  OptionsContainer,
} from './header.styles';

import { signOutPending } from '../../redux/user-reducer/user-actions';

const Header = ({ user, showCart, signOut }) => {
  return (
    <HeaderContainer>
      <LogoContainer to='/'>
        <Logo />
      </LogoContainer>
      <OptionsContainer>
        <OptionLink to='/shop'>Shop</OptionLink>
        <OptionLink to='/contact'>Contact</OptionLink>
        {user ? (
          <OptionLink as='div' onClick={signOut}>
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

const mapStateToProps = createStructuredSelector({
  user: selectCurrentUser,
  showCart: selectCartToggle,
});

const mapDispatchToProps = (dispatch) => ({
  signOut: () => dispatch(signOutPending()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
