import React from 'react';
import { CiCreditCard1, CiDeliveryTruck } from 'react-icons/ci';
import {
  BsCashCoin,
  BsPerson,
  BsFillCheckCircleFill,
  BsFillXCircleFill,
} from 'react-icons/bs';
import { useSelector } from 'react-redux';
import moment from 'moment/moment';
import { selectors } from '../../reducer';
import { OrderDescriptionContainer } from './OrderDescription.styles';
import {
  deliveryPaymentType,
  DeliveryType,
  PaymentType,
} from '../../../OrdersPage/types';
import { PaidType } from '../../types';

const OrderDescription = () => {
  const order = useSelector(selectors.orderData);

  const deliveryStrategy: deliveryPaymentType = {
    [DeliveryType.DELIVERY]: (
      <div className="deliveryType__value delivery">
        {' '}
        Delivery <CiDeliveryTruck />{' '}
      </div>
    ),
    [DeliveryType.SELF]: (
      <div className="deliveryType__value self">
        Self <BsPerson />{' '}
      </div>
    ),
  };

  const paymentStrategy: deliveryPaymentType = {
    [PaymentType.IN_PLACE]: (
      <div className="paymentType__value in_place">
        {' '}
        In place <BsCashCoin />{' '}
      </div>
    ),
    [PaymentType.ONLINE]: (
      <div className="paymentType__value online">
        Online <CiCreditCard1 />{' '}
      </div>
    ),
  };

  const paidStrategy: deliveryPaymentType = {
    [PaidType.TRUE]: <BsFillCheckCircleFill className="paid" />,
    [PaidType.FALSE]: <BsFillXCircleFill className="notPaid" />,
  };

  return (
    <OrderDescriptionContainer>
      <div className="topBlock">
        <div className="orderNumber">Order №{order?.order_number}</div>
        <div className="createdAt">
          Created at {moment(order?.created_at).format('HH:mm DD.MM.YYYY')}
        </div>
        <div className="customerNumber">
          Phone: <span>{order?.customer_phone}</span>
        </div>
      </div>
      <div className="bottomBlock">
        <div className="orderDetails">Order details</div>
        <div className="deliveryType">
          <div className="deliveryType__title">Delivery Type:</div>
          {deliveryStrategy[order?.delivery_method || '']}
        </div>
        <div className="pharmacy">
          <div className="pharmacy__title">Pharmacy:</div>
          <div>{order?.pharmacy}</div>
        </div>
        <div className="paymentType">
          <div className="paymentType__title">Payment Type:</div>
          {paymentStrategy[order?.payment_method || '']}
        </div>
        <div className="paidStatus">
          <div className="paidStatus__title">Paid:</div>
          {paidStrategy[order?.paid.toString() || '']}
        </div>
      </div>
    </OrderDescriptionContainer>
  );
};

export default OrderDescription;
