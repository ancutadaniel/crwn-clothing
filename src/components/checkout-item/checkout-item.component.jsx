import React from 'react';
import { connect } from 'react-redux';

import {
  addItem,
  removeItemCheckout,
  removeItem,
} from '../../redux/cart-reducer/cart-actions';

import './checkout-item.styles.scss';

const CheckoutItem = ({
  cartItem,
  removeItemList,
  addItemToList,
  removeItemFromChecklist,
}) => {
  const { imageUrl, name, quantity, price } = cartItem;
  return (
    <div className='checkout-item'>
      <div className='image-container'>
        <img src={imageUrl} alt='item' />
      </div>
      <span className='name'>{name}</span>
      <span className='quantity'>
        <div
          className='arrow'
          onClick={() => removeItemFromChecklist(cartItem)}
        >
          &#10094;
        </div>
        <span className='value'>{quantity}</span>
        <div className='arrow' onClick={() => addItemToList(cartItem)}>
          &#10095;
        </div>
      </span>
      <span className='price'>{price}</span>
      <div className='remove-button' onClick={() => removeItemList(cartItem)}>
        &#10005;
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  addItemToList: (item) => dispatch(addItem(item)),
  removeItemList: (item) => dispatch(removeItem(item)),
  removeItemFromChecklist: (item) => dispatch(removeItemCheckout(item)),
});

export default connect(null, mapDispatchToProps)(CheckoutItem);
