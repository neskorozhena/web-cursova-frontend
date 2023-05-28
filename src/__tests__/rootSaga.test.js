import { orderPageWatcherSaga } from '../containers/OrderPage/saga';
import { loginPageWatcherSaga } from '../containers/LoginPage/saga';
import { ordersPageWatcherSaga } from '../containers/OrdersPage/saga';

import rootSaga from '../rootSaga';
import { all } from 'redux-saga/effects';

describe('Root Saga', () => {
  let generator = null;
  let expected;

  beforeAll(() => {
    generator = rootSaga();
  });

  it('should call generator function', () => {
    expected = all([
      loginPageWatcherSaga(),
      ordersPageWatcherSaga(),
      orderPageWatcherSaga(),
    ]);

    const actual = generator.next();
    expect(actual.value).toEqual(expected);
  });
});
