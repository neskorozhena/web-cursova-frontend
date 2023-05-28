import styled from 'styled-components';
import { baseTheme } from '../../global/styles/theme';

export const OrderPageContainer = styled('div')`
  display: grid;
  grid-template-columns: 300px 1fr;
  grid-gap: 30px;

  max-width: 1216px;
  margin: 0 auto;
`;
