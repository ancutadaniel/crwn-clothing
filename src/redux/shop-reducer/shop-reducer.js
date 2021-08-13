import SHOP_DATA from '../../pages/shop/shop.data';

const initialState = {
  collections: SHOP_DATA,
};

export const shopReducer = (state = initialState, actions) => {
  switch (actions.type) {
    case 1:
      break;

    default:
      return state;
  }
};

export default shopReducer;
