import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { collectionsPreview } from '../../redux/shop-reducer/shop.selector';

import PreviewCollections from '../../components/preview-collection/preview-collection.component';

import './collections-overview.styles.scss';

const CollectionsOverview = ({ collections }) => {
  return (
    <div className='collections-overview'>
      {collections.map(({ id, ...collectionsProps }) => {
        return <PreviewCollections key={id} {...collectionsProps} />;
      })}
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  collections: collectionsPreview,
});

export default connect(mapStateToProps)(CollectionsOverview);
