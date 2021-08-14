import React from 'react';
import { connect } from 'react-redux';

import { addItem } from '../../redux/cart-reducer/cart-actions';

import {
  CollectionItemContainer,
  ImageContainer,
  CollectionFooterContainer,
  NameContainer,
  PriceContainer,
  AddButton,
} from './collection-item.styles';

const mapDispatchToProps = (dispatch) => ({
  addItemToCart: (item) => dispatch(addItem(item)),
});

const CollectionItem = ({ item, addItemToCart }) => {
  const { name, imageUrl, price } = item;

  return (
    <CollectionItemContainer>
      <ImageContainer className='image' imageUrl={imageUrl} />
      <CollectionFooterContainer>
        <NameContainer> {name}</NameContainer>
        <PriceContainer> ${price}</PriceContainer>
      </CollectionFooterContainer>
      <AddButton inverted onClick={() => addItemToCart(item)}>
        Add to cart
      </AddButton>
    </CollectionItemContainer>
  );
};

export default connect(null, mapDispatchToProps)(CollectionItem);
