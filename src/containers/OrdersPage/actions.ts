import { createAction } from '@reduxjs/toolkit';
import { asyncActionsCreator } from '../../global/redux';
import * as constants from './constants';

export const getOrders = asyncActionsCreator(constants.GET_ORDERS);
export const getOrdersSearch = asyncActionsCreator(constants.GET_ORDERS_SEARCH);
export const clearOrdersSearch = createAction(constants.CLEAR_ORDERS_SEARCH);
export const clearOrders = createAction(constants.CLEAR_ORDERS);
