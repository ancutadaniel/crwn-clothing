import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { collectionsPreview } from '../../redux/shop-reducer/shop.selector';

import PreviewCollections from '../../components/preview-collection/preview-collection.component';

import { CollectionsContainer } from './collections.styles';

const CollectionsOverview = ({ collections }) => {
  return (
    <CollectionsContainer>
      {collections.map(({ id, ...collectionsProps }) => {
        return <PreviewCollections key={id} {...collectionsProps} />;
      })}
    </CollectionsContainer>
  );
};

const mapStateToProps = createStructuredSelector({
  collections: collectionsPreview,
});

export default connect(mapStateToProps)(CollectionsOverview);
