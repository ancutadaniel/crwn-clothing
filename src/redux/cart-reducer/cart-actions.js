import { ADD_ITEM, TOGGLE_CART } from './cart-constants';

export const toggleCartAction = () => ({
  type: TOGGLE_CART,
});

export const addItem = (item) => ({
  type: ADD_ITEM,
  payload: item,
});
