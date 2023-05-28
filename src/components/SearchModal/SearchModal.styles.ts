import styled from 'styled-components';
import { baseTheme } from '../../global/styles/theme';

export const SearchContainer = styled('div')`
  width: 400px;
  margin: 0 -30px 20px -30px;
  max-height: 460px;
  z-index: 1000;
`;
export const SearchTitle = styled('div')`
  font-weight: 500;
  font-size: 18px;
  color: ${baseTheme.colors.mainLightBlue};
`;

export const SearchBlock = styled('div')`
  margin-top: 24px;
  .name-container {
    cursor: pointer;
    &:hover {
      background-color: rgba(10, 119, 199, 0.1);
    }
  }

  .name {
    padding: 6px 12px;
    border-bottom: 1px solid ${baseTheme.colors.stroking};
  }

  .active {
    background-color: rgba(10, 119, 199, 0.1);
  }
`;

export const SearchBarInput = styled('div')`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 14px 16px;
  width: 100%;
  height: 48px;
  border: 1px solid ${baseTheme.colors.stroking};
  border-radius: 8px;
  position: relative;

  input {
    width: 100%;
    color: ${baseTheme.colors.secondary};
    font-size: 16px;
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
