import styled from 'styled-components';
import { baseTheme } from '../../../../../../global/styles/theme';

export const OrderItemsContainer = styled('table')`
  width: 100%;
  border-collapse: collapse;
  padding: 20px;
  border: 1px solid ${baseTheme.colors.stroking};
  border-radius: 8px;

  th {
    text-align: left;
    color: ${baseTheme.colors.secondary};
  }

  td,
  th {
    padding: 20px 20px;
  }

  thead {
    border-bottom: 1px solid ${baseTheme.colors.stroking};

    .number {
      width: 2%;
    }

    .name,
    .manufacturer {
      width: 35%;
    }

    .quantity,
    .price {
      width: 14%;
    }
  }

  tbody {
    .name {
      font-weight: 700;
    }

    .sku {
      color: ${baseTheme.colors.mainGreen};
      font-size: 14px;
    }

    .price {
      font-weight: 700;
      color: ${baseTheme.colors.mainDarkGreen};
    }
  }

  .order-item {
    border-bottom: 1px solid ${baseTheme.colors.stroking};
  }
`;
