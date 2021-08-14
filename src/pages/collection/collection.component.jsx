import React from 'react';
import { connect } from 'react-redux';

import { collectionSelector } from '../../redux/shop-reducer/shop.selector';

import CollectionItem from '../../components/collection-item/collection-item.component';

import {
  CollectionPageContainer,
  CollectionPageTitle,
  CollectionPageItem,
} from './collection.styles';

const CollectionPage = ({ collection }) => {
  const { title, items } = collection;
  return (
    <CollectionPageContainer>
      <CollectionPageTitle>{title}</CollectionPageTitle>
      <CollectionPageItem>
        {items.map((item) => (
          <CollectionItem key={item.id} item={item} />
        ))}
      </CollectionPageItem>
    </CollectionPageContainer>
  );
};

const mapStateToProps = (state, ownProps) => ({
  collection: collectionSelector(ownProps.match.params.id)(state),
});

export default connect(mapStateToProps)(CollectionPage);
