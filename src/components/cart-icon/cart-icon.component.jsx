import React from 'react';
import { connect } from 'react-redux';
import { ReactComponent as CartBag } from '../../assets/shopping-bag.svg';
import { showCartAction } from '../../redux/cart-reducer/cart-actions';

import './cart-icon.styles.scss';

const CartIcon = ({ showHideCheckout, showCart }) => {
  return (
    <div className='cart-icon' onClick={() => showHideCheckout(!showCart)}>
      <CartBag className='shopping-icon' />
      <span className='item-count'>0</span>
    </div>
  );
};

const mapStateToProps = (state) => ({
  showCart: state.root_cart_reducer.showCart,
});

const mapDispatchToProps = (dispatch) => {
  return {
    showHideCheckout: (bool) => dispatch(showCartAction(bool)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);
