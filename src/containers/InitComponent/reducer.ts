import { createReducer } from '@reduxjs/toolkit';
import { InitComponentState } from './types';
import * as actions from './actions';
import { AppState } from '../../global/types';

const initialState: InitComponentState = {
  notifications: [],
  nextNotificationId: 0,
};

const reducer = createReducer(initialState, {
  [actions.addApplicationNotification.type]: (state, action) => {
    const { nextNotificationId } = state;
    state.notifications = [{ ...action.payload, id: nextNotificationId }];
    state.nextNotificationId = nextNotificationId + 1;
  },
  [actions.removeApplicationNotification.type]: (state, action) => {
    state.notifications = state.notifications.filter(
      (n) => n.id !== action.payload
    );
  },
});

const notifications = (state: AppState) =>
  state.initComponentReducer.notifications;

const selectors = {
  notifications,
};

export { selectors };
export default reducer;
