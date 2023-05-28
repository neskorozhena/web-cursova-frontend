import { createReducer } from '@reduxjs/toolkit';
import { OrderPageState } from './types';
import * as actions from './actions';
import { AppState } from '../../global/types';

const initialState: OrderPageState = {
  order: {
    loading: false,
    data: null,
    error: null,
  },

  statuses: {
    loading: false,
    data: null,
    error: null,
  },
};

const reducer = createReducer(initialState, {
  [actions.getOrder.REQUEST]: (state) => {
    state.order.loading = true;
  },
  [actions.getOrder.ERROR]: (state, action) => {
    state.order.loading = false;
    state.order.error = action.payload;
  },
  [actions.getOrder.SUCCESS]: (state, action) => {
    state.order.loading = false;
    state.order.data = action.payload;
  },

  [actions.getStatuses.REQUEST]: (state) => {
    state.statuses.loading = true;
  },
  [actions.getStatuses.ERROR]: (state, action) => {
    state.statuses.loading = false;
    state.statuses.error = action.payload;
  },
  [actions.getStatuses.SUCCESS]: (state, action) => {
    state.statuses.loading = false;
    state.statuses.data = action.payload;
  },
});

const orderData = (state: AppState) => state.orderPageReducer.order.data;

const orderLoading = (state: AppState) => state.orderPageReducer.order.loading;

const orderError = (state: AppState) => state.orderPageReducer.order.error;

const statusesData = (state: AppState) => state.orderPageReducer.statuses.data;

const statusesLoading = (state: AppState) =>
  state.orderPageReducer.statuses.loading;

const statusesError = (state: AppState) =>
  state.orderPageReducer.statuses.error;

const selectors = {
  orderData,
  orderLoading,
  orderError,
  statusesError,
  statusesData,
  statusesLoading,
};

export { selectors };
export default reducer;
