import { all } from 'redux-saga/effects';
import { loginPageWatcherSaga } from './containers/LoginPage/saga';
import { ordersPageWatcherSaga } from './containers/OrdersPage/saga';
import { orderPageWatcherSaga } from './containers/OrderPage/saga';

export default function* rootSaga() {
  yield all([
    loginPageWatcherSaga(),
    ordersPageWatcherSaga(),
    orderPageWatcherSaga(),
  ]);
}
