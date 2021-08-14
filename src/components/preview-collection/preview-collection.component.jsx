import React from 'react';
import { withRouter } from 'react-router-dom';

import CollectionItem from '../collection-item/collection-item.component';

import {
  PreviewCollectionContainer,
  PreviewCollectionTitle,
  PreviewCollectionItems,
} from './preview-collection.styles';

const PreviewCollections = ({ title, items, history, match, routeName }) => {
  return (
    <PreviewCollectionContainer>
      <PreviewCollectionTitle
        onClick={() => history.push(`${match.path}/${routeName}`)}
      >
        {title?.toUpperCase()}
      </PreviewCollectionTitle>
      <PreviewCollectionItems>
        {items
          .filter((item, index) => index < 4)
          .map((item) => {
            return <CollectionItem key={item.id} item={item} />;
          })}
      </PreviewCollectionItems>
    </PreviewCollectionContainer>
  );
};

export default withRouter(PreviewCollections);
