import React from 'react';
import { connect } from 'react-redux';
import CustomButton from '../custom-button/custom-button.component';
import CartItem from '../cart-item/cart-item.component';
import { selectCartItems } from '../../redux/cart-reducer/cart.selectors';
import { createStructuredSelector } from 'reselect';
import { toggleCartAction } from '../../redux/cart-reducer/cart-actions';

import { withRouter } from 'react-router-dom';

import {
  CartDropdownContainer,
  CartItemsContainer,
  EmptyMessage,
} from './cart-dropdown.styles';

const CartDropdown = ({ cartItems, history, dispatch }) => {
  return (
    <CartDropdownContainer>
      <CartItemsContainer>
        {cartItems.length ? (
          cartItems.map((cartItem) => (
            <CartItem key={cartItem.id} item={cartItem} />
          ))
        ) : (
          <EmptyMessage className='empty-message'>
            Your cart is empty
          </EmptyMessage>
        )}
      </CartItemsContainer>
      <CustomButton
        onClick={() => {
          history.push('/checkout');
          dispatch(toggleCartAction());
        }}
      >
        Checkout
      </CustomButton>
    </CartDropdownContainer>
  );
};

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
});

// withRouter give as access to location history match for routing
// connect pass into component as a props ===> dispatch
// if we don't supply second argument with connect
export default withRouter(connect(mapStateToProps)(CartDropdown));
