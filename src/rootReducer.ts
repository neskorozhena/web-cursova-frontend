import { combineReducers } from 'redux';
import { loginReducer } from './containers/LoginPage';
import { ordersPageReducer } from './containers/OrdersPage';
import { initComponentReducer } from './containers/InitComponent';
import { orderPageReducer } from './containers/OrderPage';

export default combineReducers({
  loginReducer,
  ordersPageReducer,
  initComponentReducer,
  orderPageReducer,
});
