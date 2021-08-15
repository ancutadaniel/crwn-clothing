import { GET_SHOP_DATA } from './shop-constants';

const initialState = {
  collections: {},
};

export const shopReducer = (state = initialState, actions) => {
  switch (actions.type) {
    case GET_SHOP_DATA:
      return {
        ...state,
        collections: actions.payload,
      };

    default:
      return state;
  }
};

export default shopReducer;
