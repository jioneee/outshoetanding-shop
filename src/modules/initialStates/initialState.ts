import { CartStateType } from './initialStateType';

// export const CartState: CartStateType = {
//     count:0,
// }

export const initialState: CartStateType = {
  count: 0,
  cartItems: [
    {
      id: 1,
      name: '',
      img: 'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/e6da41fa-1be4-4ce5-b89c-22be4f1f02d4/%EC%97%90%EC%96%B4-%ED%8F%AC%EC%8A%A4-1-07-%EB%82%A8%EC%84%B1-%EC%8B%A0%EB%B0%9C-TttlGpDb.png',
      price: 70000,
    },
    {
      id: 2,
      name: '',
      img: 'https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/61f87dec481e4512823ea7fb0080ba1a_9366/Black_BB5476_01_standard.jpg',
      price: 70000,
    },
  ],
};
