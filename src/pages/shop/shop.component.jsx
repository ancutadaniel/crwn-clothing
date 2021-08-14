import React from 'react';
import { Route } from 'react-router-dom';

import { ShopPageContainer } from './shop.styles';

import CollectionsOverview from '../../components/collections-overview/collections-overview.component';
import CollectionPage from '../collection/collection.component';

const Shop = ({ match }) => {
  return (
    <ShopPageContainer>
      <Route exact path={`${match.path}`} component={CollectionsOverview} />
      <Route path={`${match.path}/:id`} component={CollectionPage} />
    </ShopPageContainer>
  );
};

export default Shop;
