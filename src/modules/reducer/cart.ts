import { createReducer } from 'typesafe-actions';

import { ADD_COUNT, DEC_COUNT, MINUS_QUANTITY, PLUS_QUANTITY, ADD_TO_CART } from '../actionTypes/cart';
import { CartActionType } from '../actions';
import { CartStateType, CartItemType } from '../initialStates/initialStateType';
import { initialState } from '../initialStates/initialState';

export default createReducer<CartStateType, CartActionType>(initialState, {
  [ADD_COUNT]: (state, action) => {
    return {
      ...state,
      count: state.count + (typeof action.payload === 'number' ? action.payload : 0),
    };
  },
  [DEC_COUNT]: (state, action) => {
    return {
      ...state,
      count: state.count - (typeof action.payload === 'number' ? action.payload : 0),
    };
  },
  [PLUS_QUANTITY]: (state, action) => {
    return {
      ...state,
      count: state.count + 1,
    };
  },
  [MINUS_QUANTITY]: (state, action) => {
    return {
      ...state,
      count: state.count - 1,
    };
  },
  [ADD_TO_CART]: (state, action) => {
    if (typeof action.payload === 'object' && action.payload !== null) {
      const { id, name, quantity, size, price, img } = action.payload as { id: number; name: string; quantity: number; size: string; price: number; img: string };
      const newItem: CartItemType = {
        id,
        name,
        price,
        img,
        quantity,
        size,
      };
      return {
        ...state,
        cartItems: [...state.cartItems, newItem],
      };
    }
    return state;
  },
});

// export default createReducer<CartStateType, CartActionType>(initialState, {
//     [ADD_COUNT]: (state , action) => {
//         const newState: CartActionType = {
//             ...state,
//             count: state.count + action.payload,
//         }
//         return newState
//     },
//     [DEC_COUNT]: (state: any, action: any) => {
//         const newState: CartActionType = {
//             ...state,
//             count: state.count - action.payload,
//         }
//         return newState

// },

// })
