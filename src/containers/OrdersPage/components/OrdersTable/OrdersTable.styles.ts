import styled from 'styled-components';
import { baseTheme } from '../../../../global/styles/theme';

export const OrdersTableContainer = styled('table')`
  width: 100%;
  border-collapse: collapse;

  th {
    text-align: left;
    color: ${baseTheme.colors.mainDarkGreen};
  }

  tr {
    border-top: 1px solid ${baseTheme.colors.stroking};
    border-bottom: 1px solid ${baseTheme.colors.stroking};

    &:hover {
      border-top: 1px solid ${baseTheme.colors.mainDarkGreen};
      border-bottom: 1px solid ${baseTheme.colors.mainDarkGreen};
      transition: all 1s;
    }
  }

  td,
  th {
    padding: 16px 10px;
  }

  .td {
    &__created_at {
      color: ${baseTheme.colors.secondary};
    }

    &__status {
      color: ${baseTheme.colors.white};
      font-weight: bold;
      padding: 7px 10px;
      border-radius: 10px;
      width: fit-content;
    }
  }

  .order-item {
    cursor: pointer;
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
`;
