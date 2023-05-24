import { createReducer } from "typesafe-actions";

import { ADD_COUNT, DEC_COUNT } from "../actionTypes/cart";
import { CartActionType } from "../actions";
import { CartStateType } from "../initialStates/initialStateType";
import { initialState } from "../initialStates/initialState";

export default createReducer<CartStateType, CartActionType>(initialState, {
    [ADD_COUNT]: (state, action) => {
      return {
        ...state,
        count: state.count + action.payload,
      };
    },
    [DEC_COUNT]: (state, action) => {
      return {
        ...state,
        count: state.count - action.payload,
      };
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