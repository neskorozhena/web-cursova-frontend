import styled from 'styled-components';
import { baseTheme } from '../../global/styles/theme';

export const HeaderContainer = styled('div')`
  background-color: ${baseTheme.colors.mainDarkGreen};
  padding: 16px 32px;
`;

export const HeaderContent = styled('div')`
  max-width: 1216px;
  margin: auto;
  display: flex;
  height: 40px;
  justify-content: space-between;
  align-items: center;
`;

export const HeaderLogoPharmacyNameContainer = styled('div')`
  display: flex;
  justify-content: space-between;
`;

export const HeaderLogo = styled('div')`
  cursor: pointer;

  img {
    width: 150px;
  }
`;

export const HeaderControls = styled('div')`
  display: flex;
  justify-content: space-between;
`;

export const HeaderButtonContainer = styled('div')`
  padding: 9px 16px;
  border-radius: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 18px;
  font-weight: 500;
  margin-right: 16px;
  color: ${baseTheme.colors.white};
  cursor: pointer;

  &:hover {
    cursor: pointer;
    background-color: rgba(255, 255, 255, 0.2);
    transition: all 0.5s;
  }
`;

export const HeaderLogoutButtonContainer = styled('div')`
  padding: 9px 16px;
  border-radius: 8px;
  background-color: ${baseTheme.colors.white};
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 18px;
  font-weight: 500;
  color: ${baseTheme.colors.mainGreen};
  cursor: pointer;
  flex-direction: column;

  div {
    font-size: 10px;
  }

  &:hover {
    transition: all 0.5s;
    background-color: ${baseTheme.colors.mainGreen};
    color: ${baseTheme.colors.white};
  }
`;
