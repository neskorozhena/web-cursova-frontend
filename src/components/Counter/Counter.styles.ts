import styled from 'styled-components';
import { baseTheme } from '../../global/styles/theme';

export const CountContainer = styled('div')`
  display: flex;
  border-radius: 4px;
  // margin: -4px 0 0 -25px;

  input[type='number'] {
    outline: 0 !important;
    border: 1px solid ${baseTheme.colors.stroking};
    -moz-appearance: textfield;
    text-align: center;

    :active,
    :hover,
    :focus {
      outline: 0 !important;
      outline-offset: 0;
    }
  }

  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    border: 1px solid ${baseTheme.colors.stroking};
    outline: 0 !important;
  }

  .count {
    min-width: 32px;
    height: 32px;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 3px;
    border-right: 1px solid ${baseTheme.colors.stroking};
    border-left: 1px solid ${baseTheme.colors.stroking};
    border: 1px solid ${baseTheme.colors.stroking};
  }

  .more {
    color: ${baseTheme.colors.warning};
  }

  .notEnough {
    color: ${baseTheme.colors.error};
  }

  .disabledCount {
    background-color: ${baseTheme.colors.disabled};
    border-right: 1px solid ${baseTheme.colors.disabled};
    border-left: 1px solid ${baseTheme.colors.disabled};
  }

  .countIcon {
    cursor: pointer;
    width: 32px;
    height: 32px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .countIcon:first-child {
    background-color: ${baseTheme.colors.background};
    border-right: 1px solid ${baseTheme.colors.stroking};
    border-bottom-left-radius: 4px;
    border-top-left-radius: 4px;
    border: 1px solid ${baseTheme.colors.stroking};
  }

  .countIcon:last-child {
    border-left: 1px solid ${baseTheme.colors.stroking};
    border-bottom-right-radius: 4px;
    border-top-right-radius: 4px;
    border: 1px solid ${baseTheme.colors.stroking};
  }
`;

export const AnalogCountContainer = styled('div')`
  display: flex;
  border-radius: 4px;

  input[type='number'] {
    outline: 0 !important;
    border: 1px solid ${baseTheme.colors.stroking};
    -moz-appearance: textfield;
    text-align: center;

    :active,
    :hover,
    :focus {
      outline: 0 !important;
      outline-offset: 0;
    }
  }

  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    border: 1px solid ${baseTheme.colors.stroking};
    outline: 0 !important;
  }

  .count {
    min-width: 32px;
    height: 32px;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 3px;
    border-right: 1px solid ${baseTheme.colors.stroking};
    border-left: 1px solid ${baseTheme.colors.stroking};
    border: 1px solid ${baseTheme.colors.stroking};
  }

  .more {
    color: ${baseTheme.colors.warning};
  }

  .notEnough {
    color: ${baseTheme.colors.error};
  }

  .disabledCount {
    background-color: ${baseTheme.colors.disabled};
    border-right: 1px solid ${baseTheme.colors.disabled};
    border-left: 1px solid ${baseTheme.colors.disabled};
  }

  .countIcon {
    cursor: pointer;
    width: 32px;
    height: 32px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .countIcon:first-child {
    background-color: ${baseTheme.colors.background};
    border-right: 1px solid ${baseTheme.colors.stroking};
    border-bottom-left-radius: 4px;
    border-top-left-radius: 4px;
    border: 1px solid ${baseTheme.colors.stroking};
  }

  .countIcon:last-child {
    border-left: 1px solid ${baseTheme.colors.stroking};
    border-bottom-right-radius: 4px;
    border-top-right-radius: 4px;
    border: 1px solid ${baseTheme.colors.stroking};
  }
`;
