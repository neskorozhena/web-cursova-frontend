import axios from 'axios';

export class OrderService {
  static API_BASE_URL = `${process.env.REACT_APP_API_BASE_URL}`;

  static getOrder = async (orderNumber: string) => {
    const response = await axios({
      method: 'get',
      url: `${OrderService.API_BASE_URL}/orders/${orderNumber}`,
    });
    return response.data;
  };

  static getStatuses = async () => {
    const response = await axios({
      method: 'get',
      url: `${OrderService.API_BASE_URL}/order_status/`,
    });
    return response.data;
  };

  static putOrderStatus = async (orderId: string, statusId: string) => {
    const response = await axios({
      method: 'put',
      url: `${OrderService.API_BASE_URL}/orders/${orderId}/status/?status=${statusId}`,
    });
    return response.data;
  };
}
