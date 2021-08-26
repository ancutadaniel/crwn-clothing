import React, { useEffect } from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { ShopPageContainer } from './shop.styles';
import CollectionOverviewContainer from '../../components/collections-overview/container-overview.container';
import CollectionPageContainer from '../../pages/collection/collection.component';
import { pendingShopData } from '../../redux/shop-reducer/shop-actions';

const Shop = ({ fetchData, match }) => {
  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return (
    <ShopPageContainer>
      <Route
        exact
        path={`${match.path}`}
        component={CollectionOverviewContainer}
      />
      <Route path={`${match.path}/:id`} component={CollectionPageContainer} />
    </ShopPageContainer>
  );
};

const mapDispatchToProps = (dispatch) => ({
  fetchData: () => dispatch(pendingShopData()),
});

export default connect(null, mapDispatchToProps)(Shop);
