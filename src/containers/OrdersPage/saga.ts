import { all, call, put, takeLatest, select } from 'redux-saga/effects';
import * as actions from './actions';
import { OrdersService } from './service';
import { OrderData } from './types';

interface GetSearchOrderParams {
  type: string;
  payload: { searchValue: string };
}

export function* getOrdersSaga() {
  try {
    const response: OrderData[] = yield call(OrdersService.getOrders);

    yield put(actions.getOrders.success(response));
  } catch (error) {
    yield put(actions.getOrders.error(error));
  }
}

export function* getOrdersSearch({ payload }: GetSearchOrderParams) {
  try {
    const response: { orders: OrderData[] } = yield call(
      OrdersService.getOrderSearch,
      payload.searchValue
    );

    yield put(actions.getOrdersSearch.success(response.orders));
  } catch (error) {
    yield put(actions.getOrdersSearch.error(error));
  }
}

export function* ordersPageWatcherSaga() {
  yield all([
    takeLatest(actions.getOrders.REQUEST, getOrdersSaga),
    takeLatest(actions.getOrdersSearch.REQUEST, getOrdersSearch),
  ]);
}
