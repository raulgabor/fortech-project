import {
  DECREASE_BY_VALUE,
  INCREASE_BY_VALUE,
} from "./pagesCounterActionTypes";

export const increaseByValue = (pagesNumber: number) => ({
  type: INCREASE_BY_VALUE,
  payload: {
    pagesNumber,
  },
});

export const decreaseByValue = (pagesNumber: number) => ({
  type: DECREASE_BY_VALUE,
  payload: {
    pagesNumber,
  },
});
