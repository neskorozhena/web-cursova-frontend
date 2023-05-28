import styled from 'styled-components';
import { baseTheme } from '../../../../../../global/styles/theme';

export const OrderStatusesContainer = styled('div')`
  padding: 20px;
  display: flex;

  .order-statuses {
    display: flex;

    &__current-block {
      display: flex;
      gap: 10px;
      align-items: center;
      font-size: 20px;
      color: ${baseTheme.colors.secondary};

      &__current {
        color: ${baseTheme.colors.white};
        font-weight: bold;
        padding: 10px 24px;
        border-radius: 10px;
        width: fit-content;
      }
    }

    &__statuses-block {
      margin-left: 60px;
      display: flex;
      gap: 10px;
      align-items: center;
      position: relative;
      cursor: pointer;

      &__set {
        font-size: 20px;
        padding: 10px 24px;
        border-radius: 8px;
      }

      &__open-block {
        position: absolute;
        padding: 8px 16px;
        width: fit-content;
        top: 60px;
        border-radius: 8px;
        background: ${baseTheme.colors.white};
        box-shadow: 0 4px 10px rgb(144 154 170 / 30%);

        &__status {
          cursor: pointer;
          padding: 8px 0;

          &:hover {
            color: ${baseTheme.colors.primary} !important;
          }
        }
      }
    }
  }
`;
