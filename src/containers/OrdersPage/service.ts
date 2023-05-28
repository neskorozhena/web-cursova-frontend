import axios from 'axios';

export class OrdersService {
  static API_BASE_URL = `${process.env.REACT_APP_API_BASE_URL}`;

  static getOrders = async () => {
    const response = await axios({
      method: 'get',
      url: `${OrdersService.API_BASE_URL}/orders/`,
    });
    return response.data;
  };

  static getOrderSearch = async (searchValue: string) => {
    const response = await axios({
      method: 'get',
      url: `${OrdersService.API_BASE_URL}/orders/search/?q=${searchValue}`,
    });
    return response.data;
  };
}
