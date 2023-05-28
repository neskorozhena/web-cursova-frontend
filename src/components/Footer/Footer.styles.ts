import styled from 'styled-components';
import { baseTheme } from '../../global/styles/theme';

export const FooterContainer = styled('div')`
  border-top: 1px solid ${baseTheme.colors.stroking};
  padding: 0 32px;
`;

export const FooterContentContainer = styled('div')`
  max-width: 1216px;
  margin: auto;
`;

export const FooterContentBlock = styled('div')`
  margin: 24px 0;
`;

export const FooterLeftBlock = styled('div')`
  .description {
    padding-top: 10px;
    color: ${baseTheme.colors.secondary};
    font-size: 12px;
  }
`;
