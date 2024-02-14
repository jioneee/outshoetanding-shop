import { ADD_COUNT, DEC_COUNT, PLUS_QUANTITY, MINUS_QUANTITY, ADD_TO_CART, REMOVE_SELECTED_FROM_CART } from '../actionTypes/cart';
import { CartItemType } from '../initialStates/initialStateType';

export const addCount = (value: number) => {
  return { type: ADD_COUNT, payload: value };
};

export const decCount = (value: number) => {
  return { type: DEC_COUNT, payload: value };
};

export const plusQuantity = (value: number) => {
  return { type: PLUS_QUANTITY, payload: value };
};

export const minusQuantity = (value: number) => {
  return { type: MINUS_QUANTITY, payload: value };
};

export const addToCart = ({ id, name, quantity, size, price, img }: CartItemType) => {
  return {
    type: ADD_TO_CART,
    payload: { id, name, quantity, size, price, img },
  };
};

export const removeSelectedFromCart = (indicesToRemove: number | number[]) => {
  return {
    type: REMOVE_SELECTED_FROM_CART,
    payload: indicesToRemove,
  };
};
