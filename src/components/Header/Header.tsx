import { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import * as Styled from './Header.styles';
import * as actions from '../../containers/LoginPage/actions';
import logo from '../../global/media/crm-header-logo.svg';
import { getFromLocalStorage, setToLocalStorage } from '../../global/helpers';
import { selectors } from '../../containers/LoginPage/reducer';

const Header = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const userData = useSelector(selectors.userData);
  const { t } = useTranslation();

  const [isAuthorized, setIsAuthorized] = useState<boolean>(false);
  const accessToken = getFromLocalStorage('accessToken');

  console.log(userData);

  const handleLogout = () => {
    dispatch(actions.logout());
    setToLocalStorage('accessToken', null);
    setToLocalStorage('refreshToken', null);
    window.location.reload();
  };

  const handleClick = (route: string) => history.push(route);

  useEffect(() => {
    if (accessToken) {
      dispatch(actions.getUserInfo.request());
      setIsAuthorized(true);
    } else {
      setIsAuthorized(false);
    }
  }, [accessToken, dispatch]);

  return (
    <Styled.HeaderContainer>
      <Styled.HeaderContent>
        <Styled.HeaderLogoPharmacyNameContainer>
          <Styled.HeaderLogo onClick={() => handleClick('/orders')}>
            <img src={logo} alt="header logo" />
          </Styled.HeaderLogo>
        </Styled.HeaderLogoPharmacyNameContainer>
        {isAuthorized && (
          <Styled.HeaderControls>
            {/* <Styled.HeaderButtonContainer */}
            {/*  onClick={() => handleClick('/sources')} */}
            {/* > */}
            {/*  {' '} */}
            {/*  {t('Header.SOURCES_BTN_TEXT')} */}
            {/* </Styled.HeaderButtonContainer> */}
            {/* <Styled.HeaderButtonContainer */}
            {/*  onClick={() => handleClick('/operators')} */}
            {/* > */}
            {/*  {t('Header.OPERATORS_BTN_TEXT')} */}
            {/* </Styled.HeaderButtonContainer> */}

            <Styled.HeaderButtonContainer
              onClick={() => handleClick('/report')}
            >
              {t('Header.REPORT_BTN_TEXT')}
            </Styled.HeaderButtonContainer>
            <Styled.HeaderButtonContainer
              onClick={() => handleClick('/orders')}
            >
              {t('Header.ORDER_BTN_TEXT')}
            </Styled.HeaderButtonContainer>

            <Styled.HeaderLogoutButtonContainer
              onClick={handleLogout}
              id="logout"
            >
              {t('Header.LOGOUT_BTN_TEXT')}

              {userData && (
                <div>
                  {userData.first_name} {userData.last_name}
                </div>
              )}
            </Styled.HeaderLogoutButtonContainer>
          </Styled.HeaderControls>
        )}
      </Styled.HeaderContent>
    </Styled.HeaderContainer>
  );
};

export default Header;
