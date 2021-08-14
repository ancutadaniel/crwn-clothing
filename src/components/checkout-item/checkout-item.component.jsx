import React from 'react';
import { connect } from 'react-redux';

import {
  addItem,
  removeItemCheckout,
  removeItem,
} from '../../redux/cart-reducer/cart-actions';

import {
  CheckoutItemContainer,
  ImageContainer,
  TextContainer,
  QuantityContainer,
  RemoveButtonContainer,
} from './checkout.styles';

const CheckoutItem = ({
  cartItem,
  removeItemList,
  addItemToList,
  removeItemFromChecklist,
}) => {
  const { imageUrl, name, quantity, price } = cartItem;
  return (
    <CheckoutItemContainer>
      <ImageContainer>
        <img src={imageUrl} alt='item' />
      </ImageContainer>
      <TextContainer>{name}</TextContainer>
      <QuantityContainer>
        <div
          className='arrow'
          onClick={() => removeItemFromChecklist(cartItem)}
        >
          &#10094;
        </div>
        <span>{quantity}</span>
        <div className='arrow' onClick={() => addItemToList(cartItem)}>
          &#10095;
        </div>
      </QuantityContainer>
      <TextContainer>{price}</TextContainer>
      <RemoveButtonContainer onClick={() => removeItemList(cartItem)}>
        &#10005;
      </RemoveButtonContainer>
    </CheckoutItemContainer>
  );
};

const mapDispatchToProps = (dispatch) => ({
  addItemToList: (item) => dispatch(addItem(item)),
  removeItemList: (item) => dispatch(removeItem(item)),
  removeItemFromChecklist: (item) => dispatch(removeItemCheckout(item)),
});

export default connect(null, mapDispatchToProps)(CheckoutItem);
