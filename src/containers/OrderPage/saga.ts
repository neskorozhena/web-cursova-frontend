import { all, call, put, takeLatest } from 'redux-saga/effects';
import { OrderData } from '../OrdersPage/types';
import * as actions from './actions';
import { OrderService } from './service';
import { putOrderStatus } from './actions';

interface OrderParam {
  type: string;
  payload: { orderNumber: string };
}

interface PutOrderParam {
  type: string;
  payload: { orderId: string; statusId: string; postEffect: any };
}

export function* getOrderSaga({ payload }: OrderParam) {
  try {
    const response: OrderData[] = yield call(
      OrderService.getOrder,
      payload.orderNumber
    );
    yield put(actions.getOrder.success(response));
  } catch (error) {
    yield put(actions.getOrder.error(error));
  }
}

export function* getStatusesSaga() {
  try {
    const response: OrderData[] = yield call(OrderService.getStatuses);
    yield put(actions.getStatuses.success(response));
  } catch (error) {
    yield put(actions.getStatuses.error(error));
  }
}

export function* putOrderStatusSaga({ payload }: PutOrderParam) {
  try {
    const response: OrderData[] = yield call(
      OrderService.putOrderStatus,
      payload.orderId,
      payload.statusId
    );

    if (payload.postEffect) {
      yield call(payload.postEffect);
    }

    yield put(actions.putOrderStatus.success(response));
  } catch (error) {
    yield put(actions.putOrderStatus.error(error));
  }
}

export function* orderPageWatcherSaga() {
  yield all([
    takeLatest(actions.getOrder.REQUEST, getOrderSaga),
    takeLatest(actions.getStatuses.REQUEST, getStatusesSaga),
    takeLatest(actions.putOrderStatus.REQUEST, putOrderStatusSaga),
  ]);
}
