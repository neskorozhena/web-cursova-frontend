import React from 'react';
import { OrderItemsContainer } from './OrderItems.styles';
import { OrderData } from '../../../../../OrdersPage/types';

interface Props {
  order: OrderData | null;
}

const OrderItems = ({ order }: Props) => {
  return (
    <OrderItemsContainer>
      <thead>
        <tr>
          <th className="number">№</th>
          <th className="name">Name</th>
          <th className="manufacturer">Manufacturer</th>
          <th className="quantity">Quantity</th>
          <th className="price">Price</th>
        </tr>
      </thead>
      <tbody>
        {order &&
          order.items.map((item, index) => (
            <tr className="order-item" key={item.sku}>
              <td>{index + 1}</td>
              <td>
                <span className="name">{item.name}</span> <br />
                <span className="sku">{item.sku}</span>
              </td>
              <td>{item.manufacturer}</td>
              <td>{item.quantity}</td>
              <td className="price">{item.total_price}</td>
            </tr>
          ))}
      </tbody>
    </OrderItemsContainer>
  );
};

export default OrderItems;
