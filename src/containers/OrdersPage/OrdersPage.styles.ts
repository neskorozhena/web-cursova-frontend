import styled from 'styled-components';
import { baseTheme } from '../../global/styles/theme';

export const OrdersPageContainer = styled('div')<{ isOperator?: boolean }>`
  max-width: 1216px;
  margin: 50px auto;

  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const SearchContainer = styled('div')`
  position: relative;
`;

export const OrderTitle = styled('div')`
  font-size: 30px;
  font-weight: bold;
  color: ${baseTheme.colors.mainGreen};
`;
