import { PRODUCT_ACTIONS_TYPES, PRODUCTS_ACTIONS_TYPES } from "../actionTypes";

export const getProducts = () => {
  return {
    type: PRODUCTS_ACTIONS_TYPES.GET_PRODUCTS,
  };
};
export const getProductsSuccess = (payLoad) => {
  return {
    type: PRODUCTS_ACTIONS_TYPES.GET_PRODUCTS_SUCCESS,
    payLoad,
  };
};
export const getProductsFail = (payLoad) => {
  return {
    type: PRODUCTS_ACTIONS_TYPES.GET_PRODUCTS_FAIL,
    payLoad,
  };
};

// ==================================================================================
export const loadProduct = () => {
  return {
    type: PRODUCT_ACTIONS_TYPES.GET_PRODUCT,
  };
};

export const getProductSuccess = (payLoad) => {
  return {
    type: PRODUCT_ACTIONS_TYPES.GET_PRODUCT_SUCCESS,
    payLoad,
  };
};

export const getProductFail = (payLoad) => {
  return {
    type: PRODUCT_ACTIONS_TYPES.GET_PRODUCT_FAIL,
    payLoad,
  };
};
