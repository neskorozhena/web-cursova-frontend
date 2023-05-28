import React from 'react';
import moment from 'moment';
import { useHistory } from 'react-router-dom';
import { CiDeliveryTruck, CiCreditCard1 } from 'react-icons/ci';
import { BsPerson, BsCashCoin } from 'react-icons/bs';
import {
  deliveryPaymentType,
  DeliveryType,
  OrderData,
  PaymentType,
} from '../../types';
import { OrdersTableContainer } from './OrdersTable.styles';

interface Props {
  orders: OrderData[];
}
const OrdersTable = ({ orders }: Props) => {
  const history = useHistory();

  const deliveryStrategy: deliveryPaymentType = {
    [DeliveryType.DELIVERY]: (
      <div className="delivery">
        {' '}
        Delivery <CiDeliveryTruck />{' '}
      </div>
    ),
    [DeliveryType.SELF]: (
      <div className="self">
        Self <BsPerson />{' '}
      </div>
    ),
  };

  const paymentStrategy: deliveryPaymentType = {
    [PaymentType.IN_PLACE]: (
      <div className="in_place">
        {' '}
        In place <BsCashCoin />{' '}
      </div>
    ),
    [PaymentType.ONLINE]: (
      <div className="online">
        Online <CiCreditCard1 />{' '}
      </div>
    ),
  };

  const handleClickOrder = (id: string) => {
    history.push(`/orders/${id}`);
  };

  return (
    <OrdersTableContainer>
      <thead>
        <tr>
          <th>№</th>
          <th>Phone</th>
          <th>Created at</th>
          <th>Pharmacy</th>
          <th>Payment method</th>
          <th>Delivery method</th>
          <th>Status</th>
          <th>Price</th>
        </tr>
      </thead>
      <tbody className="tableContent">
        {orders.map((el) => (
          <tr
            className="order-item"
            key={el.order_number}
            onClick={() => handleClickOrder(el.order_number.toString())}
          >
            <td>№{el.order_number}</td>
            <td>{el.customer_phone}</td>
            <td className="td__created_at">
              {moment(el.created_at).format('HH:mm:ss DD.MM.YYYY')}
            </td>
            <td>{el.pharmacy}</td>
            <td>{paymentStrategy[el.payment_method]}</td>
            <td>{deliveryStrategy[el.delivery_method]}</td>
            <td>
              <div
                style={{ backgroundColor: `#${el.status.color}` }}
                className="td__status"
              >
                {el.status.name}
              </div>
            </td>
            <td>{el.total_price}</td>
          </tr>
        ))}
      </tbody>
    </OrdersTableContainer>
  );
};

export default OrdersTable;
