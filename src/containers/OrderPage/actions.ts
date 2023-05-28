import { asyncActionsCreator } from '../../global/redux';
import * as constants from './constants';
import { PUT_ORDER_STATUS } from './constants';

export const getOrder = asyncActionsCreator(constants.GET_ORDER);
export const getStatuses = asyncActionsCreator(constants.GET_STATUSES);
export const putOrderStatus = asyncActionsCreator(constants.PUT_ORDER_STATUS);
