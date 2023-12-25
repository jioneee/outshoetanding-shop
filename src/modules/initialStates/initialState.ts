import { CartStateType } from './initialStateType';

export const initialState: CartStateType = {
  count: 1,
  cartItems: [
    {
      id: 1,
      name: 'Nike Air Force 1 07',
      img: {
        image:
          'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/e6da41fa-1be4-4ce5-b89c-22be4f1f02d4/%EC%97%90%EC%96%B4-%ED%8F%AC%EC%8A%A4-1-07-%EB%82%A8%EC%84%B1-%EC%8B%A0%EB%B0%9C-TttlGpDb.png',
        title: 'Nike Air Force 1 07',
        price: 70000,
      },

      quantity: 1,
      size: '270',
      price: 70000,
    },
    {
      id: 2,
      name: 'adidas Gazelle',
      img: {
        image: 'https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/61f87dec481e4512823ea7fb0080ba1a_9366/Black_BB5476_01_standard.jpg',
        title: 'adidas Gazelle',
        price: 70000,
      },

      quantity: 2,
      size: '230',
      price: 70000,
    },
  ],
};

// export const initialState: CartStateType = {
//   count: 1,
//   cartItems: [
//     {
//       id: 1,
//       name: 'Nike Air Force 1 07',
//       img: 'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/e6da41fa-1be4-4ce5-b89c-22be4f1f02d4/%EC%97%90%EC%96%B4-%ED%8F%AC%EC%8A%A4-1-07-%EB%82%A8%EC%84%B1-%EC%8B%A0%EB%B0%9C-TttlGpDb.png',

//       quantity: 1,
//       size: 270,
//       price: 70000,
//     },
//     {
//       id: 2,
//       name: 'adidas Gazelle',
//       img: 'https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/61f87dec481e4512823ea7fb0080ba1a_9366/Black_BB5476_01_standard.jpg',

//       quantity: 2,
//       size: 230,
//       price: 70000,
//     },
//   ],
// };
