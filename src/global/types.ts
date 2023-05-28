import { LoginState } from '../containers/LoginPage/types';
import { OrdersPageState } from '../containers/OrdersPage/types';
import { InitComponentState } from '../containers/InitComponent/types';
import { OrderPageState } from '../containers/OrderPage/types';

export interface AppState {
  loginReducer: LoginState;
  ordersPageReducer: OrdersPageState;
  initComponentReducer: InitComponentState;
  orderPageReducer: OrderPageState;
}

export enum StatusType {
  ON_CLARIFICATION = 'on_clarification',
  CANCELED = 'canceled',
  COMPLETED = 'completed',
  NEW = 'new',
  IN_PHARMACY_COLLECTING = 'in_pharmacy_collecting',
  IN_PHARMACY_PLACED = 'in_pharmacy_placed',
  IN_PHARMACY_READY = 'in_pharmacy_ready',
  IN_PHARMACY_ISSUED = 'in_pharmacy_issued',
  IN_PHARMACY_COLLECTED = 'in_pharmacy_collected',
  IN_DELIVERY = 'in_delivery',
  WAITING_FOR_DELIVERY = 'waiting_for_delivery',
  DELIVERED = 'delivered',
}

export enum UserRole {
  OPERATOR = 'operator',
  MANAGER = 'manager',
  PHARMACIST = 'pharmacist',
  ADMIN = 'admin',
}
