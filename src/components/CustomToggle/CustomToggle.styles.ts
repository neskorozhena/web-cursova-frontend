import styled from 'styled-components';
import { baseTheme } from '../../global/styles/theme';

export const CustomToggleContainer = styled('div')`
  .toggle-title {
    color: ${baseTheme.colors.secondary};
    font-weight: 500;
    padding: 10px 0 0 15px;
  }

  .toggle-title-green {
    color: ${baseTheme.colors.white} !important;
  }

  .toggle-button-green:checked {
    background-color: ${baseTheme.colors.focusLight} !important;
  }

  .toggle-button {
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
  }

  .toggle-button {
    position: relative;
    display: inline-block;
    width: 44px;
    height: 24px;
    margin: 0;
    vertical-align: top;
    background: #f6f9ff;
    box-shadow: inset 0 3px 20px rgba(0, 0, 0, 0.15);
    border-radius: 30px;
    outline: none;
    cursor: pointer;
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    transition: all 0.3s cubic-bezier(0.2, 0.85, 0.32, 1.2);
  }

  .toggle-button::after {
    content: '';

    display: inline-block;
    position: absolute;
    left: 1.5px;
    top: 1.5px;

    width: 22px;
    height: 21px;
    background-color: ${baseTheme.colors.white};
    border-radius: 50%;

    transition: all 0.3s cubic-bezier(0.2, 0.85, 0.32, 1.2);
    transform: translateX(0);
  }

  .toggle-button:checked::after {
    transform: translateX(calc(100% - 3.5px));
    background-color: #f6f9ff;
  }
  .toggle-button:checked {
    background-color: ${baseTheme.colors.mainLightBlue};
  }
`;
