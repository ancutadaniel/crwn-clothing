import React from 'react';
import { SHOP_DATA } from './shop.data';
import PreviewCollections from '../../components/preview-collection/preview-collection.component';

class Shop extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      collections: SHOP_DATA,
    };
  }

  render() {
    const { collections } = this.state;
    return (
      <div className='shop-page'>
        {collections.map(({ id, ...collectionsProps }) => {
          return <PreviewCollections key={id} {...collectionsProps} />;
        })}
      </div>
    );
  }
}

export default Shop;
