import { createReducer } from '@reduxjs/toolkit';
import { OrdersPageState } from './types';
import * as actions from './actions';
import { AppState } from '../../global/types';

const initialState: OrdersPageState = {
  orders: {
    data: null,
    loading: false,
    error: null,
  },
  ordersSearch: {
    data: null,
    error: null,
    loading: false,
  },
};

const reducer = createReducer(initialState, {
  [actions.getOrders.REQUEST]: (state) => {
    state.orders.loading = true;
  },
  [actions.getOrders.ERROR]: (state, action) => {
    state.orders.error = action.payload;
    state.orders.loading = false;
  },
  [actions.getOrders.SUCCESS]: (state, action) => {
    state.orders.data = action.payload;
    state.orders.loading = false;
  },

  [actions.getOrdersSearch.REQUEST]: (state) => {
    state.ordersSearch.loading = true;
  },
  [actions.getOrdersSearch.ERROR]: (state, action) => {
    state.ordersSearch.error = action.payload;
    state.ordersSearch.loading = false;
  },
  [actions.getOrdersSearch.SUCCESS]: (state, action) => {
    state.ordersSearch.data = action.payload;
    state.ordersSearch.loading = false;
  },
  [actions.clearOrdersSearch.type]: (state) => {
    state.ordersSearch.data = null;
  },
  [actions.clearOrders.type]: (state) => {
    state.orders.data = null;
  },
});

const ordersLoading = (state: AppState) =>
  state.ordersPageReducer.orders.loading;
const ordersError = (state: AppState) => state.ordersPageReducer.orders.error;
const ordersData = (state: AppState) => state.ordersPageReducer.orders.data;

const ordersSearchLoading = (state: AppState) =>
  state.ordersPageReducer.ordersSearch.loading;
const ordersSearchError = (state: AppState) =>
  state.ordersPageReducer.ordersSearch.error;
const ordersSearchData = (state: AppState) =>
  state.ordersPageReducer.ordersSearch.data;

console.log(ordersSearchData);

const selectors = {
  ordersLoading,
  ordersError,
  ordersData,
  ordersSearchData,
  ordersSearchError,
  ordersSearchLoading,
};

export { selectors };
export default reducer;
