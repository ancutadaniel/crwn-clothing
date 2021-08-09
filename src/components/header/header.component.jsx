import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { auth } from '../../firebase/firebase.utils';
import { ReactComponent as Logo } from '../../assets/crown.svg';

import CartIcon from '../cart-icon/cart-icon.component';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';

import { userClick } from '../../redux/user-reducer/user-actions';

import { createStructuredSelector } from 'reselect';
import { selectCartToggle } from '../../redux/cart-reducer/cart.selectors';
import { selectCurrentUser } from '../../redux/user-reducer/user.selector';

import './header.styles.scss';

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
    <div className='header'>
      <Link className='logo-container' to='/'>
        <Logo className='logo' />
      </Link>
      <div className='options'>
        <Link className='option' to='/shop'>
          Shop
        </Link>
        <Link className='option' to='/contact'>
          Contact
        </Link>
        {user ? (
          <div className='option' onClick={() => auth.signOut()}>
            {' '}
            Sign Out{' '}
          </div>
        ) : (
          <Link className='option' to='/signin'>
            Sign In
          </Link>
        )}
        <CartIcon />
      </div>
      {showCart && <CartDropdown />}
    </div>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
