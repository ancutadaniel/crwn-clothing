import React from 'react';
import { connect } from 'react-redux';

import { toggleCartAction } from '../../redux/cart-reducer/cart-actions';
import { selectCartItemsCount } from '../../redux/cart-reducer/cart.selectors';
import { createStructuredSelector } from 'reselect';

import { CartIconContainer, ShoppingIcon, ItemCount } from './cart-icon.styles';

const CartIcon = ({ toggleCheckout, itemCount }) => {
  return (
    <CartIconContainer onClick={() => toggleCheckout()}>
      <ShoppingIcon />
      <ItemCount>{itemCount}</ItemCount>
    </CartIconContainer>
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
