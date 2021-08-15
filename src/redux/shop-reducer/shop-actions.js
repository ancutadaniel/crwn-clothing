import { GET_SHOP_DATA } from './shop-constants';

export const getShopData = (data) => ({
  type: GET_SHOP_DATA,
  payload: data,
});
