import { all, takeLatest, call, put } from 'redux-saga/effects';
import * as actions from './actions';
import { LoginService } from './service';
import { setToLocalStorage } from '../../global/helpers';
import { UserData } from './types';

interface LoginSagaParams {
  type: string;
  payload: { username: string; password: string; postEffect: any };
}
interface AuthResponse {
  access: string;
  refresh: string;
}

export function* authSaga({ payload }: LoginSagaParams) {
  try {
    const response: AuthResponse = yield call(
      LoginService.auth,
      payload.username,
      payload.password
    );

    setToLocalStorage('accessToken', response.access);
    setToLocalStorage('refreshToken', response.refresh);

    if (payload.postEffect) {
      yield call(payload.postEffect, response.access);
    }
    yield put(actions.auth.success(response));
  } catch (error) {
    yield put(actions.auth.error(error));
  }
}

export function* getUserDataSaga() {
  try {
    const response: UserData = yield call(LoginService.getUserInfo);
    yield put(actions.getUserInfo.success(response));
  } catch (error) {
    yield put(actions.getUserInfo.error(error));
  }
}

export function* loginPageWatcherSaga() {
  yield all([
    takeLatest(actions.auth.REQUEST, authSaga),
    takeLatest(actions.getUserInfo.REQUEST, getUserDataSaga),
  ]);
}
