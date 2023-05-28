import styled from 'styled-components';
import { baseTheme } from '../../global/styles/theme';

export const AccordionWrapper = styled('div')`
  width: 100%;
  border-bottom: 1px solid ${baseTheme.colors.stroking};

  .accordionHeader {
    display: flex;
    justify-content: space-between;
    align-items: center;
    cursor: pointer;
    height: 48px;
  }

  .accordionHeaderCollapsed {
    border-bottom: none;
  }

  .headerIcon {
    transition: 100ms linear;
    margin-right: 5px;
  }

  .headerIconCollapsed {
    transform: rotate(90deg);
  }

  .accordionBody {
    width: 100%;
    max-width: 90vw;
    max-height: 0;
    font-weight: 400;
    font-size: 14px;
    color: ${baseTheme.colors.secondary};
    overflow: hidden;
    transition: max-height 100ms ease-out;

    * {
      font-weight: 400;
      font-size: 16px;
      line-height: 20px;
      color: ${baseTheme.colors.secondary};
      font-style: normal;
    }

    p {
      margin: 0;
    }

    pre {
      white-space: normal !important;
    }
  }

  .accordionBodyCollapsed {
    padding-bottom: 12px;
    max-height: 1500px;
    transition: max-height 300ms ease-in;
    border-bottom: 1px solid ${baseTheme.colors.stroking};
    overflow: auto;
  }
`;

export const HeaderTitle = styled('div')`
  font-size: 16px;
  font-weight: 500;
  color: ${baseTheme.colors.primary};
  padding: 12px 0 16px;
`;

export const ImgBlock = styled('div')`
  height: 100%;
  display: flex;
  align-items: flex-start;

  img {
    margin: 12px 0 0 12px;
  }
`;
