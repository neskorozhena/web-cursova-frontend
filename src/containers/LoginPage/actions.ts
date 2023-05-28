import { createAction } from '@reduxjs/toolkit';
import { asyncActionsCreator } from '../../global/redux';
import * as constants from './constants';

export const auth = asyncActionsCreator(constants.AUTH);
export const logout = createAction(constants.LOGOUT);
export const loginClearError = createAction(constants.LOGIN_CLEAR_ERROR);

export const getUserInfo = asyncActionsCreator(constants.GET_USER_INFO);
