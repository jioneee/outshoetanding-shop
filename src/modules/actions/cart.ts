import { ADD_COUNT, DEC_COUNT } from "../actionTypes/cart";

export const addCount = (value: number) => {
    return { type: ADD_COUNT, payload: value}
}

export const decCount = (value: number) => {
    return { type: DEC_COUNT, payload: value}
}