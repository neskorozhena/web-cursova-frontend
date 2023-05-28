import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import * as actions from './actions';
import { selectors } from './reducer';
import Loader from '../../components/Loader';
import {
  OrdersPageContainer,
  OrderTitle,
  SearchContainer,
} from './OrdersPage.styles';
import OrdersTable from './components/OrdersTable/OrdersTable';
import SearchBar from '../../components/SearchBar';
import OrdersSearch from './components/OrdersSearch';

const OrdersPage = () => {
  const dispatch = useDispatch();
  const orders = useSelector(selectors.ordersData);
  const ordersError = useSelector(selectors.ordersError);

  const ordersSearch = useSelector(selectors.ordersSearchData);

  const [searchValue, setSearchValue] = useState<string>('');

  useEffect(() => {
    dispatch(actions.getOrders.request());
  }, [dispatch]);

  const handleSearchOrder = (value: string) => {
    setSearchValue(value);
    dispatch(actions.getOrdersSearch.request({ searchValue: value }));
  };

  return (
    <OrdersPageContainer>
      <OrderTitle>Orders</OrderTitle>
      <SearchContainer>
        <SearchBar
          value={searchValue}
          placeholder="Search order by customer phone number or order number"
          setValue={(e) => handleSearchOrder(e)}
          onSearchClick={() => handleSearchOrder(searchValue)}
        />
        {ordersSearch && (
          <OrdersSearch orders={ordersSearch} searchValue={searchValue} />
        )}
      </SearchContainer>

      {orders && !ordersError ? <OrdersTable orders={orders} /> : <Loader />}
    </OrdersPageContainer>
  );
};

export default OrdersPage;
