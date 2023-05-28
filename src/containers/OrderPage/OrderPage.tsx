import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import * as actions from './actions';
import { OrderPageContainer } from './OrderPage.styles';
import OrderDescription from './components/OrderDescription';
import Order from './components/Order';
import { selectors } from './reducer';
import Loader from '../../components/Loader';

const OrderPage = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const orderError = useSelector(selectors.orderError);
  const orderLoading = useSelector(selectors.orderLoading);
  const order = useSelector(selectors.orderData);
  const orderId = history.location.pathname.split('/')[2];

  useEffect(() => {
    dispatch(actions.getOrder.request({ orderNumber: orderId }));
    dispatch(actions.getStatuses.request());
  }, [dispatch]);

  return (
    <OrderPageContainer>
      {!orderError && order && (
        <>
          <OrderDescription />
          <Order />
        </>
      )}
      {orderLoading && <Loader />}
    </OrderPageContainer>
  );
};

export default OrderPage;
