import { SHOW_CART } from './cart-constants';

export const showCartAction = (bool) => ({
  type: SHOW_CART,
  payload: bool,
});
