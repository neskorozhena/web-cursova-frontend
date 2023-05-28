import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import * as Styled from './MainPage.styles';
import Footer from '../../components/Footer';
import withAuth from '../../global/hocs/withAuth';
import Header from '../../components/Header';
import NotificationsList from '../../components/NotificationsList';
import OrdersPage from '../OrdersPage';
import OrderPage from '../OrderPage';

const MainPage = () => {
  return (
    <div>
      <Header />
      <Styled.MainPageContentContainer>
        <Route exact path="/orders" component={OrdersPage} />
        <Route exact path="/orders/:orderId" component={OrderPage} />
        {window.location.pathname === '/login' && <Redirect to="/orders" />}
      </Styled.MainPageContentContainer>
      <Footer />
      <NotificationsList />
    </div>
  );
};

export default withAuth(MainPage);
