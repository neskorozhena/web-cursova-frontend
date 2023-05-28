import { useTranslation } from 'react-i18next';
import * as Styled from './Footer.styles';
import logo from '../../global/media/crm-footer-logo.svg';

const Footer = () => {
  const { t } = useTranslation();

  return (
    <Styled.FooterContainer>
      <Styled.FooterContentContainer>
        <Styled.FooterContentBlock>
          <Styled.FooterLeftBlock>
            <img src={logo} alt="application logo" />
            <div className="description">{t('Footer.DESCRIPTION')}</div>
          </Styled.FooterLeftBlock>
        </Styled.FooterContentBlock>
      </Styled.FooterContentContainer>
    </Styled.FooterContainer>
  );
};

export default Footer;
