import { createReducer } from '@reduxjs/toolkit';
import { getFromLocalStorage } from '../../global/helpers';
import { AppState } from '../../global/types';
import { LoginState } from './types';
import * as actions from './actions';

const initialState: LoginState = {
  error: null,
  loading: false,
  accessToken: getFromLocalStorage('accessToken') || null,
  refreshToken: getFromLocalStorage('refreshToken') || null,
  userData: {
    data: null,
    error: null,
    loading: false,
  },
};

const reducer = createReducer(initialState, {
  [actions.auth.REQUEST]: (state) => {
    state.loading = true;
  },
  [actions.auth.ERROR]: (state, action) => {
    state.error = action.payload.message;
    state.loading = false;
  },
  [actions.auth.SUCCESS]: (state, action) => {
    state.accessToken = action.payload.access;
    state.refreshToken = action.payload.refresh;
    state.loading = false;
  },
  [actions.logout.type]: (state) => {
    state.accessToken = null;
    state.refreshToken = null;
  },
  [actions.loginClearError.type]: (state) => {
    state.error = null;
  },

  [actions.getUserInfo.REQUEST]: (state) => {
    state.userData.loading = true;
  },
  [actions.getUserInfo.ERROR]: (state, action) => {
    state.userData.error = action.payload;
    state.userData.loading = false;
  },
  [actions.getUserInfo.SUCCESS]: (state, action) => {
    state.userData.data = action.payload;
    state.userData.loading = false;
  },
});

const error = (state: AppState) => state.loginReducer.error;
const loading = (state: AppState) => state.loginReducer.loading;
const accessToken = (state: AppState) => state.loginReducer.accessToken;
const refreshToken = (state: AppState) => state.loginReducer.refreshToken;

const userData = (state: AppState) => state.loginReducer.userData.data;

const selectors = {
  error,
  loading,
  accessToken,
  refreshToken,
  userData,
};

export { selectors };
export default reducer;
