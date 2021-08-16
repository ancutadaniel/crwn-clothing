import React from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';

import { ShopPageContainer } from './shop.styles';

import CollectionsOverview from '../../components/collections-overview/collections-overview.component';
import CollectionPage from '../collection/collection.component';
import Spinner from '../../components/spinner/spinner.component';

import { fetchShopDataAsync } from '../../redux/shop-reducer/shop-actions';
import {
  collectionFetch,
  collectionIsLoading,
} from '../../redux/shop-reducer/shop.selector';
import { createStructuredSelector } from 'reselect';

// HOC use for component - wrapped
const CollectionsOverviewSpinner = Spinner(CollectionsOverview);
const CollectionsPageSpinner = Spinner(CollectionPage);

class Shop extends React.Component {
  componentDidMount() {
    const { fetchData } = this.props;
    fetchData();
  }

  render() {
    const { match, isPending, isDataLoaded } = this.props;

    return (
      <ShopPageContainer>
        <Route
          exact
          path={`${match.path}`}
          render={(props) => (
            <CollectionsOverviewSpinner isLoading={isPending} {...props} />
          )}
        />
        <Route
          path={`${match.path}/:id`}
          render={(props) => (
            <CollectionsPageSpinner isLoading={!isDataLoaded} {...props} />
          )}
        />
      </ShopPageContainer>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  isPending: collectionFetch,
  isDataLoaded: collectionIsLoading,
});

const mapDispatchToProps = (dispatch) => ({
  fetchData: () => dispatch(fetchShopDataAsync()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Shop);
