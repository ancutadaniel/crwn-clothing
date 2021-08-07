import { SHOW_CART } from './cart-constants';

const initialState = {
  showCart: false,
};

const cartReducer = (state = initialState, actions) => {
  switch (actions.type) {
    case SHOW_CART:
      return {
        ...state,
        showCart: actions.payload,
      };

    default:
      return state;
  }
};

export default cartReducer;
