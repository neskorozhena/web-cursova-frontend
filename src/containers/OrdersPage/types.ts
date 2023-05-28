export interface StatusData {
  code: number;
  name: string;
  color: string;
  delivery: boolean;
  created_at: string;
  updated_at: string;
}

export interface GoodsData {
  sku: string;
  name: string;
  description: string;
  manufacturer: string;
  total_price: string;
  created_at: string;
  updated_at: string;
  quantity: number;
}

export enum DeliveryType {
  DELIVERY = 'DELIVERY',
  SELF = 'SELF',
}

export enum PaymentType {
  ONLINE = 'ONLINE',
  IN_PLACE = 'IN_PLACE',
}

export interface OrderData {
  order_number: number;
  pharmacy: string;
  status: StatusData;
  payment_method: string;
  delivery_method: string;
  delivery_price: string;
  customer_phone: string;
  total_price: number;
  items: GoodsData[];
  comment: string;
  paid: boolean;
  paid_delivery: boolean;
  was_paid_at: string;
  created_at: string;
  updated_at: string;
}

export interface OrdersPageState {
  orders: {
    data: null | OrderData[];
    error: null | string;
    loading: boolean;
  };

  ordersSearch: {
    data: null | OrderData[];
    error: null | string;
    loading: boolean;
  };
}

export type deliveryPaymentType = {
  // eslint-disable-next-line
  [key: string]: JSX.Element;
};
