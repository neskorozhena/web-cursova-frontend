import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ClickAwayListener } from '@mui/material';
import * as actions from '../../../../actions';
import { selectors } from '../../../../reducer';
import { OrderStatusesContainer } from './OrderStatuses.styles';
import { OrderData } from '../../../../../OrdersPage/types';
import Button from '../../../../../../components/Button';

interface Props {
  order: OrderData | null;
}

const OrderStatuses = ({ order }: Props) => {
  const dispatch = useDispatch();
  const statuses = useSelector(selectors.statusesData);
  const [nextStatus, setNextStatus] = useState<{
    code: number;
    name: string;
    color: string;
  }>({ name: 'Choose status', code: 0, color: '5F7F3E' });
  const [isSetStatusOpen, setSetStatusOpen] = useState<boolean>(false);

  const handleOpenSetStatus = () => setSetStatusOpen(true);
  const handleCloseSetStatus = () => setSetStatusOpen(false);
  const handleSetOrderStatus = () => {
    nextStatus.code !== 0 &&
      dispatch(
        actions.putOrderStatus.request({
          orderId: order?.order_number,
          statusId: nextStatus.code.toString(),
          postEffect: () =>
            dispatch(
              actions.getOrder.request({ orderNumber: order?.order_number })
            ),
        })
      );
  };

  const handleSetNextStatus = (code: number, color: string, name: string) => {
    setNextStatus({ code, color, name });
    handleCloseSetStatus();
  };

  return (
    <OrderStatusesContainer>
      <div className="order-statuses__current-block">
        <div>Current status:</div>
        <div
          style={{ backgroundColor: `#${order?.status.color}` }}
          className="order-statuses__current-block__current"
        >
          {order?.status.name}
        </div>
      </div>
      <div className="order-statuses__statuses-block">
        <div
          className="order-statuses__statuses-block__set"
          style={{
            color: `#${nextStatus.color}`,
            border: `2px solid #${nextStatus.color}`,
          }}
          onClick={handleOpenSetStatus}
        >
          {nextStatus.name}
        </div>
        {statuses && isSetStatusOpen && (
          <ClickAwayListener onClickAway={handleCloseSetStatus}>
            <div className="order-statuses__statuses-block__open-block">
              {statuses.map((status) => (
                <div
                  className="order-statuses__statuses-block__open-block__status"
                  style={{ color: `#${status.color}` }}
                  onClick={() =>
                    handleSetNextStatus(status.code, status.color, status.name)
                  }
                >
                  {status.name}
                </div>
              ))}
            </div>
          </ClickAwayListener>
        )}
        <Button onClick={handleSetOrderStatus} text="Set" />
      </div>
    </OrderStatusesContainer>
  );
};

export default OrderStatuses;
