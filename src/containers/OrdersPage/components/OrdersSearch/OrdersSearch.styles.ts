import styled from 'styled-components';
import { baseTheme } from '../../../../global/styles/theme';

export const OrdersSearchContainer = styled('div')`
  position: absolute;
  background-color: #e2ebd8;
  padding: 20px 14px;
  border-radius: 8px;
  top: 50px;
  width: 100%;
  font-size: 14px;

  -webkit-box-shadow: 10px 10px 5px 0px rgba(0, 0, 0, 0.06);
  -moz-box-shadow: 10px 10px 5px 0px rgba(0, 0, 0, 0.06);
  box-shadow: 10px 10px 5px 0px rgba(0, 0, 0, 0.06);

  .empty-orders {
    color: ${baseTheme.colors.secondary};
  }

  .header-container {
    display: grid;
    grid-template-columns: 0.5fr 1fr 1fr 1fr 0.7fr;
    padding-bottom: 8px;
    border-bottom: 1px solid ${baseTheme.colors.secondary};
    color: ${baseTheme.colors.secondary};
  }

  .order-container {
    display: grid;
    grid-template-columns: 0.5fr 1fr 1fr 1fr 0.7fr;
    padding: 8px 0;
    border-bottom: 1px solid transparent;
    align-items: center;

    .active {
      font-weight: bold;
      color: ${baseTheme.colors.mainDarkGreen};
      text-decoration: underline;
    }

    .status {
      color: ${baseTheme.colors.white};
      font-weight: bold;
      padding: 7px 10px;
      border-radius: 10px;
      width: fit-content;
    }

    &:hover {
      cursor: pointer;
      border-bottom: 1px solid ${baseTheme.colors.mainDarkGreen};
    }
  }
`;
