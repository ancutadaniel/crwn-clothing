import { combineReducers } from 'redux';
import userReducer from './user-reducer/user-reducer';
import cartReducer from './cart-reducer/cart-reducer';

export default combineReducers({
  root_user_reducer: userReducer,
  root_cart_reducer: cartReducer,
});
