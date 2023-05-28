import { Step } from 'react-joyride';
import { OrderData } from '../OrdersPage/types';

export interface StatusData {
  code: number;
  name: string;
  color: string;
  created_at: string;
  updated_at: string;
  delivery: boolean;
}

export interface OrderPageState {
  order: {
    data: null | OrderData;
    error: null | string;
    loading: boolean;
  };

  statuses: {
    data: null | StatusData[];
    error: null | string;
    loading: boolean;
  };
}

export enum PaidType {
  TRUE = 'true',
  FALSE = 'false',
}
