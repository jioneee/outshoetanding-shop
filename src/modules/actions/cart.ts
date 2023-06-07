import { ADD_COUNT, DEC_COUNT, PLUS_QUANTITY, MINUS_QUANTITY } from "../actionTypes/cart";

export const addCount = (value: number) => {
    return { type: ADD_COUNT, payload: value}
}

export const decCount = (value: number) => {
    return { type: DEC_COUNT, payload: value}
}

export const plusQuantity = (value: number) => {
    return { type: PLUS_QUANTITY, payload: value}
}

export const minusQuantity = (value: number) => {
    return { type:  MINUS_QUANTITY, payload: value}
}