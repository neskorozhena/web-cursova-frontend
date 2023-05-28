export interface NotificationProps {
  id: number;
  type: 'error' | 'success';
  content: string;
  canBeClosed: boolean;
}

export interface InitComponentState {
  notifications: NotificationProps[];
  nextNotificationId: number;
}
