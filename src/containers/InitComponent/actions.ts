import { createAction } from '@reduxjs/toolkit';
import * as constants from './constants';

interface ApplicationNotificationItemProps {
  type: 'error' | 'success';
  content: string;
  canBeClosed: boolean;
}

export const addApplicationNotification =
  createAction<ApplicationNotificationItemProps>(
    constants.ADD_APPLICATION_NOTIFICATION
  );
export const removeApplicationNotification = createAction<number>(
  constants.REMOVE_APPLICATION_NOTIFICATION
);
