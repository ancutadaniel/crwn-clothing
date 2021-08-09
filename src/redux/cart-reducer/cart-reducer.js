import { TOGGLE_CART, ADD_ITEM } from './cart-constants';
import { addItemToCart } from './cart.utils';

const initialState = {
  showCart: false,
  cartItems: [],
};

const cartReducer = (state = initialState, actions) => {
  switch (actions.type) {
    case TOGGLE_CART:
      return {
        ...state,
        showCart: !state.showCart,
      };
    case ADD_ITEM:
      return {
        ...state,
        cartItems: addItemToCart(state.cartItems, actions.payload),
      };
    default:
      return state;
  }
};

export default cartReducer;
