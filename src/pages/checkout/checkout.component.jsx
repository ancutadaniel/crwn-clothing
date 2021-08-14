import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import CheckoutItem from '../../components/checkout-item/checkout-item.component';
import StripeCheckoutButton from '../../components/stripe-button/stripe-button.component';

import {
  selectCartItems,
  selectCartTotal,
} from '../../redux/cart-reducer/cart.selectors';

import {
  CheckoutPageContainer,
  CheckoutHeaderContariner,
  HeaderBlockContainer,
  TotalContainer,
  WarningContainer,
} from './checkout.styles';

const Checkout = ({ cartItems, total }) => (
  <CheckoutPageContainer>
    <CheckoutHeaderContariner>
      <HeaderBlockContainer>
        <span>Product</span>
      </HeaderBlockContainer>
      <HeaderBlockContainer>
        <span>Description</span>
      </HeaderBlockContainer>
      <HeaderBlockContainer>
        <span>Quantity</span>
      </HeaderBlockContainer>
      <HeaderBlockContainer>
        <span>Price</span>
      </HeaderBlockContainer>
      <HeaderBlockContainer>
        <span>Remove</span>
      </HeaderBlockContainer>
    </CheckoutHeaderContariner>
    {cartItems.map((cartItem) => (
      <CheckoutItem key={cartItem.id} cartItem={cartItem} />
    ))}
    <TotalContainer>
      <span>Total: ${total}</span>
    </TotalContainer>
    <WarningContainer>
      *Please use the following test credit card for payments
      <br />
      <span>CARD NUM: 4242 4242 4242 4242</span>
      <br />
      <span>EXP: 01/24</span>
      <br />
      <span>CVV: 123</span>
    </WarningContainer>
    <StripeCheckoutButton price={total} />
  </CheckoutPageContainer>
);

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  total: selectCartTotal,
});

export default connect(mapStateToProps)(Checkout);
