import { useDispatch, useSelector } from 'react-redux';
import * as Styled from './NotificationsList.styles';
import { selectors } from '../../containers/InitComponent/reducer';
import * as actions from '../../containers/InitComponent/actions';
import Notification from './components/Notification';

const NotificationsList = () => {
  const dispatch = useDispatch();

  const notifications = useSelector(selectors.notifications);

  const handleNotificationClose = (id: number) => {
    dispatch(actions.removeApplicationNotification(id));
  };

  return (
    <Styled.NotificationsListContainer>
      {notifications.map((notification) => (
        <Notification
          key={notification.id}
          {...notification}
          onClose={handleNotificationClose}
        />
      ))}
    </Styled.NotificationsListContainer>
  );
};

export default NotificationsList;
