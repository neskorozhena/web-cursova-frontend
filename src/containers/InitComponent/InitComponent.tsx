import { Route, Redirect, Switch } from 'react-router-dom';
import React from 'react';
import { useSelector } from 'react-redux';
import MainPage from '../MainPage';
import { selectors as loginSelectors } from '../LoginPage/reducer';
import LoginPage from '../LoginPage';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import NotificationsList from '../../components/NotificationsList';
import OrdersPage from '../OrdersPage';

const InitComponent = () => {
  const accessToken = useSelector(loginSelectors.accessToken);
  const refreshToken = useSelector(loginSelectors.refreshToken);

  const selectStartPage = () => {
    if (accessToken && refreshToken) {
      return <MainPage />;
    }

    return (
      <>
        <Header />
        <Switch>
          <Route exact path="/login" component={LoginPage} />
          {!accessToken && <Redirect to="/login" />}
        </Switch>
        <Footer />
        <NotificationsList />
      </>
    );
  };
  return selectStartPage();
};

export default InitComponent;
