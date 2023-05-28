// import reducer, { selectors } from '../reducer';
// import * as actions from '../actions';
//
// const defaultState = {
//   orders: {
//     data: null,
//     loading: false,
//     error: null,
//   },
//   ordersSearch: {
//     data: null,
//     error: null,
//     loading: false,
//   },
// };
//
// describe('AchievementsPage reducer', () => {
//   let mockState;
//
//   beforeEach(() => {
//     mockState = {
//       ...defaultState,
//     };
//   });
//
//   it('should return initial state if action type is undefined', () => {
//     expect(reducer(undefined, {})).toEqual(mockState);
//   });
//
//   it('should handle GET_ACHIEVEMENTS_REQUEST', () => {
//     expect(reducer(mockState, actions.getOrders({test: 'test'}))).toEqual({
//       ...mockState,
//       orders: {
//         data: {
//           test: 'Test',
//         },
//         loading: false,
//       }
//     });
//   });
//
//   it('should handle GET_ACHIEVEMENTS_SUCCESS', () => {
//     expect(
//       reducer(
//         mockState,
//         actions.getAchievementsSuccess({
//           test: 'Test',
//         }),
//       ),
//     ).toEqual({
//       ...mockState,
//       loading: false,
//       data: {
//         test: 'Test',
//       },
//     });
//   });
//
//   it('should handle GET_ACHIEVEMENTS_ERROR', () => {
//     expect(reducer(mockState, actions.getAchievementsError(new Error('error')))).toEqual({
//       ...mockState,
//       error: new Error('error'),
//     });
//   });
// });
//
// // describe('AchievementsPage selectors', () => {
// //   let mockState, store;
// //
// //   mockState = {
// //     ...defaultState,
// //   };
// //
// //   store = {
// //     orderPageReducer: mockState,
// //   };
// //
// //   it('selectors work', () => {
// //     expect(selectors.ordersData(store)).toEqual(mockState.orders.data);
// //     expect(selectors.ordersError(store)).toEqual(mockState.orders.error);
// //     expect(selectors.ordersError(store)).toEqual(mockState.orders.loading);
// //   });
// // });
