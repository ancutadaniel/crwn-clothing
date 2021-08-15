import React from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';

import { ShopPageContainer } from './shop.styles';

import CollectionsOverview from '../../components/collections-overview/collections-overview.component';
import CollectionPage from '../collection/collection.component';

import {
  firestore,
  convertCollectionsSnapshotToMap,
} from '../../firebase/firebase.utils';
import { getShopData } from '../../redux/shop-reducer/shop-actions';

class Shop extends React.Component {
  unsubscribeFromSnapShot = null;

  componentDidMount() {
    const { getShopDataFirebase } = this.props;
    const collectionRef = firestore.collection('collections');

    collectionRef.onSnapshot(async (snapshot) => {
      const collectionsMap = convertCollectionsSnapshotToMap(snapshot);

      getShopDataFirebase(collectionsMap);
    });
  }

  render() {
    const { match } = this.props;

    return (
      <ShopPageContainer>
        <Route exact path={`${match.path}`} component={CollectionsOverview} />
        <Route path={`${match.path}/:id`} component={CollectionPage} />
      </ShopPageContainer>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  getShopDataFirebase: (data) => dispatch(getShopData(data)),
});

export default connect(null, mapDispatchToProps)(Shop);
