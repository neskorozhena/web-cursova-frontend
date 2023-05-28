import styled from 'styled-components';
import { baseTheme } from '../../global/styles/theme';

export const CustomTextareaContainer = styled('div')`
  width: 100%;

  .textarea {
    width: 100%;
    outline: none !important;
    border: 1px solid ${baseTheme.colors.stroking};
    border-radius: 4px;
    color: ${baseTheme.colors.primary} !important;
    font-family: 'Helvetica Neue', Helvetica, sans-serif;
    font-size: 16px;
    padding: 10px 12px;
    min-height: 105px;
    min-width: 100%;
  }

  .textarea::placeholder {
    color: ${baseTheme.colors.tertiary};
    font-family: 'Helvetica Neue', Helvetica, sans-serif;
  }

  .textarea:active,
  .textarea:focus {
    border: 1px solid ${baseTheme.colors.mainLightBlue};
  }

  .textarea.error {
    background-color: rgb(${baseTheme.colors.error}, 0.05);
    border: 1px solid ${baseTheme.colors.error};
  }

  .nonResizable {
    resize: none;
  }

  .disabled {
    pointer-events: none;
    overflow-y: hidden !important;
  }
`;
