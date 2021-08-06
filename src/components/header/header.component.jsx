import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { auth } from '../../firebase/firebase.utils';
import { ReactComponent as Logo } from '../../assets/crown.svg';

import './header.styles.scss';

const mapStateToProps = (state) => ({
  user: state.root_user_reducer.currentUser,
});

const Header = ({ user }) => {
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
      </div>
    </div>
  );
};

export default connect(mapStateToProps)(Header);
