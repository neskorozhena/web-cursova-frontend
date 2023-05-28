import styled from 'styled-components';
import { baseTheme } from '../../../../global/styles/theme';

export const OrderDescriptionContainer = styled('div')`
  padding: 0 20px 20px;
  background-color: #e2ebd8;
  display: flex;
  flex-direction: column;
  gap: 10px;
  border-radius: 0 0 8px 8px;

  .topBlock {
    background-color: ${baseTheme.colors.white};
    border: 1px solid ${baseTheme.colors.stroking};
    border-radius: 0 0 8px 8px;
    padding: 24px;

    .orderNumber {
      font-size: 24px;
      font-weight: 700;
      color: ${baseTheme.colors.primary};
      margin-bottom: 12px;
    }

    .customerNumber {
      color: ${baseTheme.colors.primary};
      font-weight: 400;
      font-size: 16px;
      margin-bottom: 10px;

      span {
        color: ${baseTheme.colors.secondary};
        font-weight: 700;
        padding-right: 4px;
      }
    }

    .createdAt {
      font-size: 16px;
      font-weight: 400;
      color: ${baseTheme.colors.secondary};
      margin-bottom: 10px;
    }
  }

  .bottomBlock {
    display: flex;
    flex-direction: column;
    gap: 8px;
    padding: 24px;
    background-color: ${baseTheme.colors.white};
    border: 1px solid ${baseTheme.colors.stroking};
    border-radius: 8px;

    .orderDetails {
      font-size: 18px;
      font-weight: 500;
      color: ${baseTheme.colors.primary};
      margin-bottom: 16px;
    }

    .deliveryType {
      display: flex;

      &__title {
        font-size: 16px;
        font-weight: 400;
        color: ${baseTheme.colors.secondary};
      }

      &__value {
        padding-left: 8px;
      }
    }

    .pharmacy {
      display: flex;
      max-width: 200px;
      word-wrap: break-word;

      &__title {
        font-size: 16px;
        font-weight: 400;
        color: ${baseTheme.colors.secondary};
        margin-right: 8px;
      }
    }

    .paymentType {
      display: flex;

      &__title {
        font-size: 16px;
        font-weight: 400;
        color: ${baseTheme.colors.secondary};
      }

      &__value {
        padding-left: 8px;
      }
    }

    .paidStatus {
      display: flex;

      &__title {
        font-size: 16px;
        font-weight: 400;
        color: ${baseTheme.colors.secondary};
      }

      .paid {
        margin-left: 6px;
        margin-top: 1px;

        path {
          fill: ${baseTheme.colors.mainGreen};
        }
      }

      .notPaid {
        margin-left: 6px;
        margin-top: 1px;

        path {
          fill: ${baseTheme.colors.error};
        }
      }
    }

    .delivery,
    .self,
    .in_place,
    .online {
      display: flex;
      align-items: center;

      svg {
        margin-left: 6px;
      }
    }
  }
`;
