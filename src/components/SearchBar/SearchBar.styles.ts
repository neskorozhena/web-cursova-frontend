import styled from 'styled-components';
import { baseTheme } from '../../global/styles/theme';

export const SearchBarWrapper = styled('div')`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const SearchBarInput = styled('div')`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 14px 16px;
  width: 100%;
  height: 38px;
  border: 1px solid ${baseTheme.colors.stroking};
  border-radius: 8px 0 0 8px;
  position: relative;

  input {
    width: 100%;
    color: ${baseTheme.colors.secondary};
    font-size: 14px;
    -webkit-appearance: none;
    border: none;
    padding: 0;
    background-color: inherit;

    &:focus {
      outline: none;
    }

    &::placeholder {
      color: ${baseTheme.colors.tertiary};
    }
  }
`;

export const SearchBarButton = styled('div')`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 38px;
  height: 38px;
  border-radius: 0 8px 8px 0;
  background: ${baseTheme.colors.mainGreen};
  cursor: pointer;
  border: none;
  outline: inherit;

  svg {
    path {
      fill: ${baseTheme.colors.white};
    }
  }
`;
