import * as actionTypes from "./actionTypes";

export const LOAD_PRODUCTS = () => {
  return {
    type: actionTypes.LOAD_PRODUCTS,
  };
};

export const GET_PRODUCTS_SUCCESS = (payLoad) => {
  return {
    type: actionTypes.GET_PRODUCTS_SUCCESS,
    payLoad,
  };
};

export const GET_PRODUCTS_FAIL = (payLoad) => {
  return {
    type: actionTypes.GET_PRODUCTS_FAIL,
    payLoad,
  };
};

export const clearError = () => {
  return {
    type: actionTypes.CLEAR_ERROR,
  };
};
