import { all, call } from 'redux-saga/effects';
import { pendingShopDataSagas } from './shop-reducer/shop-sagas';
import { userSagas } from './user-reducer/user-sagas';

export default function* rootSaga() {
  yield all([call(pendingShopDataSagas), call(userSagas)]);
}
