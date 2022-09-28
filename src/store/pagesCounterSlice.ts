import { AnyAction } from "redux";
import * as pagesCounterActionTypes from "./pagesCounterActionTypes";

const initialState = {
  pagesCount: 0,
};

export const pagesCounterReducer = (
  state = initialState,
  action: AnyAction
) => {
  const { pagesCount } = state;
  const { payload, type } = action;

  switch (type) {
    case pagesCounterActionTypes.INCREASE_BY_VALUE:
      return { ...state, pagesCount: pagesCount + payload.pagesNumber };
    case pagesCounterActionTypes.DECREASE_BY_VALUE:
      return { ...state, pagesCount: pagesCount - payload.pagesNumber };
    default:
      return state;
  }
};
