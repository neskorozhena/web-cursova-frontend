import styled from 'styled-components';
import { baseTheme } from '../../global/styles/theme';

export const LoginPageContainer = styled('div')`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: calc(100vh - 200px);
`;

export const LoginPageContent = styled('div')`
  min-width: 475px;
`;

export const LoginPagePhoneConfirmation = styled('div')`
  .authHeader {
    display: flex;
    flex-direction: row;
    justify-content: center;
    color: ${baseTheme.colors.secondary};
    font-size: 38px;
    font-weight: 700;
    margin-bottom: 16px;
    cursor: pointer;
  }

  .title {
    font-size: 38px;
    font-weight: 700;
    margin: 0 8px;
    color: ${baseTheme.colors.mainDarkGreen};
    text-decoration: underline;
  }

  .form-container {
    display: flex;
    flex-direction: column;

    .form-block {
      display: flex;
      flex-direction: column;
      margin-top: 18px;
    }

    .form-label {
      color: ${baseTheme.colors.secondary};
      margin-bottom: 8px;
      font-size: 18px;
    }

    .form-label.error {
      margin: 8px 0 0;
      color: ${baseTheme.colors.error};
      font-size: 16px;
    }

    .input {
      outline: none !important;
      border: 1px solid ${baseTheme.colors.stroking};
      border-radius: 8px;
      color: ${baseTheme.colors.secondary} !important;
      padding: 10px 12px;
    }

    .input::placeholder {
      color: ${baseTheme.colors.tertiary};
    }

    .input-error {
      background-color: rgb(${baseTheme.colors.error}, 0.05);
      border: 1px solid ${baseTheme.colors.error};
    }

    .error-message-label {
      margin: 8px 0 0;
      color: ${baseTheme.colors.error};
      font-size: 14px;
    }
  }
`;

export const FormSubmitButton = styled('button')`
  cursor: pointer;
  width: 100%;
  margin-top: 30px;
  padding: 12px 24px;
  background-color: ${baseTheme.colors.mainGreen};
  color: ${baseTheme.colors.white};
  border-radius: 8px;
  font-size: 24px;
  border: none;
`;
