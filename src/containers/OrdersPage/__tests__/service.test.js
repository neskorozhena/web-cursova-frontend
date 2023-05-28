import axios from 'axios';
import { OrdersService } from '../service';
import MockAdapter from 'axios-mock-adapter';

jest.mock('axios');

describe('OrderPageService', () => {
  let response;

  it('should be defined', () => {
    expect(OrdersService).toBeDefined();
  });

  describe('getOrders', () => {
    const resp = null;
    const data = [
      {
        order_number: 2,
        pharmacy: 'Shevchenka',
        status: {
          code: 10,
          name: 'Canceled',
          color: 'bc4749',
          delivery: false,
          created_at: '2023-05-01T10:02:28.999656Z',
          updated_at: '2023-05-02T14:10:09.558940Z',
        },
        payment_method: 'ONLINE',
        delivery_method: 'DELIVERY',
        delivery_price: '0.00',
        customer_phone: '+380660666666',
        total_price: 85,
        items: [
          {
            sku: 'f3ea9406-6bee-4942-8fc9-56babee60936',
            name: 'Еспресо тонік',
            description: 'Дуже смачний',
            price: '85.00',
            created_at: '2023-05-01T09:53:13.287216Z',
            updated_at: '2023-05-01T09:53:13.287287Z',
          },
        ],
        comment: 'test',
        paid: false,
        paid_delivery: false,
        was_paid_at: null,
        created_at: '2023-05-01T10:22:19.828932Z',
        updated_at: '2023-05-04T08:35:24.808943Z',
      },
    ];

    it('should return data in success case', async () => {
      let mock = new MockAdapter(axios);
      const data = { response: true };

      mock
        .onGet(`${process.env.REACT_APP_API_BASE_URL}/orders/`)
        .reply(200, data);
      await OrdersService.getOrders().then((res) => {
        expect(res).toEqual(data);
      });
    });
  });
});
