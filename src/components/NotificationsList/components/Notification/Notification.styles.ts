import styled from 'styled-components';
import { baseTheme } from '../../../../global/styles/theme';

export const NotificationContainer = styled('div')`
  min-width: 425px;
  color: ${baseTheme.colors.white};
  font-size: 16px;
  font-weight: 400;
  padding: 10px 18.5px;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: default;
  margin-bottom: 10px;

  &.error {
    background-color: ${baseTheme.colors.error};
  }

  &.success {
    background-color: ${baseTheme.colors.focus};
  }
`;

export const NotificationContentContainer = styled('div')`
  display: flex;
  align-items: center;

  .icon {
    margin-right: 10px;
  }
`;

export const NotificationCloseIconContainer = styled('div')`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 20px;
  height: 20px;

  img {
    cursor: pointer;
  }
`;
