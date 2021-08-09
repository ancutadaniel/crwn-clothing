import React from 'react';
import { connect } from 'react-redux';
import { ReactComponent as CartBag } from '../../assets/shopping-bag.svg';
import { toggleCartAction } from '../../redux/cart-reducer/cart-actions';
import { selectCartItemsCount } from '../../redux/cart-reducer/cart.selectors';
import { createStructuredSelector } from 'reselect';

import './cart-icon.styles.scss';

const CartIcon = ({ toggleCheckout, itemCount }) => {
  return (
    <div className='cart-icon' onClick={() => toggleCheckout()}>
      <CartBag className='shopping-icon' />
      <span className='item-count'>{itemCount}</span>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    toggleCheckout: () => dispatch(toggleCartAction()),
  };
};

const mapStateToProps = createStructuredSelector({
  itemCount: selectCartItemsCount,
});

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);
