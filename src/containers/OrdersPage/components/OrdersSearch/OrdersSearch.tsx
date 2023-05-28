import React from 'react';
import parse from 'html-react-parser';

import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { ClickAwayListener } from '@mui/material';
import * as actions from '../../actions';
import { OrdersSearchContainer } from './OrdersSearch.styles';
import { OrderData } from '../../types';

interface Props {
  orders: OrderData[];
  searchValue: string;
}

const OrdersSearch = ({ orders, searchValue }: Props) => {
  const dispatch = useDispatch();
  const history = useHistory();

  const getHighlightedString = (itemString: string) => {
    const req = new RegExp(searchValue.replace('+', '\\+'), 'gi');
    return itemString?.replace(
      req,
      (str) => `<span className="active">${str}</span>`
    );
  };

  const clearSearch = () => dispatch(actions.clearOrdersSearch());

  const handleClickOrder = (id: string) => {
    history.push(`/orders/${id}`);
  };

  const searchHeader = (
    <div className="header-container">
      <div>№</div>
      <div>Phone</div>
      <div>Pharmacy</div>
      <div>Status</div>
      <div>Price</div>
    </div>
  );

  const emptyOrders = orders.length === 0;

  return (
    <ClickAwayListener onClickAway={() => clearSearch()}>
      <OrdersSearchContainer>
        {!emptyOrders && (
          <>
            {searchHeader}
            {orders.map((e) => (
              <div
                className="order-container"
                key={e.order_number}
                onClick={() => handleClickOrder(e.order_number.toString())}
              >
                <div>
                  №{parse(getHighlightedString(e.order_number.toString()))}
                </div>
                <div>{parse(getHighlightedString(e.customer_phone))}</div>
                <div>{e.pharmacy}</div>
                <div
                  className="status"
                  style={{ backgroundColor: `#${e.status.color}` }}
                >
                  {e.status.name}
                </div>
                <div>{e.total_price}$</div>
              </div>
            ))}
          </>
        )}
        {emptyOrders && <div className="empty-orders">Nothing found</div>}
      </OrdersSearchContainer>
    </ClickAwayListener>
  );
};

export default OrdersSearch;
