import React from 'react';
import { connect } from 'react-redux';

import CustomButton from '../custom-button/custom-button.component';
import { addItem } from '../../redux/cart-reducer/cart-actions';

import './collection-item.styles.scss';

const mapDispatchToProps = (dispatch) => ({
  addItem: (item) => dispatch(addItem(item)),
});

const CollectionItem = ({ item, addItem }) => {
  const { name, imageUrl, price } = item;

  return (
    <div className='collection-item'>
      <div
        style={{ backgroundImage: `url(${imageUrl})` }}
        className='image'
      ></div>
      <div className='collection-footer'>
        <span className='name'> {name}</span>
        <span className='price'> ${price}</span>
      </div>
      <CustomButton inverted onClick={() => addItem(item)}>
        Add to cart
      </CustomButton>
    </div>
  );
};

export default connect(null, mapDispatchToProps)(CollectionItem);
