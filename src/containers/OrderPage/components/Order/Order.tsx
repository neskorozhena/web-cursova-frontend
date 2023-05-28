import React from 'react';
import { useSelector } from 'react-redux';
import { selectors } from '../../reducer';
import { OrderContainer } from './Order.styled';
import OrderStatuses from './components/OrderStatuses';
import OrderItems from './components/OrderItems';

const Order = () => {
  const order = useSelector(selectors.orderData);

  return (
    <OrderContainer>
      <OrderStatuses order={order} />
      <OrderItems order={order} />
    </OrderContainer>
  );
};

export default Order;
