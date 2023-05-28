import { useEffect } from 'react';
import * as Styled from './Notification.styles';
import { NotificationProps } from '../../../../containers/InitComponent/types';
import successIcon from '../../../../global/media/success-notification-icon.svg';
import closeIcon from '../../../../global/media/close-light.svg';
import errorIcon from '../../../../global/media/error-notification-icon.svg';

interface NotificationItemProps extends NotificationProps {
  onClose: (id: number) => void;
}

const Notification = ({
  id,
  type,
  content,
  canBeClosed,
  onClose,
}: NotificationItemProps) => {
  const iconsStrategy = {
    success: <img className="icon" src={successIcon} alt="success icon" />,
    error: <img className="icon" src={errorIcon} alt="error icon" />,
  };

  useEffect(() => {
    if (type === 'success') {
      const timeout = setTimeout(() => {
        onClose(id);
      }, 7000);
      return () => clearTimeout(timeout);
    }
  });

  return (
    <Styled.NotificationContainer className={`${type}`}>
      <Styled.NotificationContentContainer>
        {iconsStrategy[type]}
        {content}
      </Styled.NotificationContentContainer>
      {canBeClosed && (
        <Styled.NotificationCloseIconContainer onClick={() => onClose(id)}>
          <img src={closeIcon} alt="close icon" />
        </Styled.NotificationCloseIconContainer>
      )}
    </Styled.NotificationContainer>
  );
};

export default Notification;
