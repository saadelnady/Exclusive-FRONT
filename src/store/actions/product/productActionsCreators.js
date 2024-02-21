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
export const getProduct = () => {
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
// ========================================================================
export const addProduct = (payLoad) => {
  return {
    type: PRODUCT_ACTIONS_TYPES.POST_PRODUCT,
    payLoad,
  };
};
export const addProductSuccess = (payLoad) => {
  return {
    type: PRODUCT_ACTIONS_TYPES.POST_PRODUCT_SUCCESS,
    payLoad,
  };
};
export const addProductFail = (payLoad) => {
  return {
    type: PRODUCT_ACTIONS_TYPES.POST_PRODUCT_FAIL,
    payLoad,
  };
};
// ========================================================================

export const editSubCategory = (payLoad) => {
  return {
    type: PRODUCT_ACTIONS_TYPES.PUT_PRODUCT,
    payLoad,
  };
};
export const editSubCategorySuccess = (payLoad) => {
  return {
    type: PRODUCT_ACTIONS_TYPES.PUT_PRODUCT_SUCCESS,
    payLoad,
  };
};
export const editSubCategoryFail = (payLoad) => {
  return {
    type: PRODUCT_ACTIONS_TYPES.PUT_PRODUCT_FAIL,
    payLoad,
  };
};
// ========================================================================
export const deleteSubCategory = (payLoad) => {
  return {
    type: PRODUCT_ACTIONS_TYPES.DELETE_PRODUCT,
    payLoad,
  };
};
export const deleteSubCategorySuccess = (payLoad) => {
  return {
    type: PRODUCT_ACTIONS_TYPES.DELETE_PRODUCT_SUCCESS,
    payLoad,
  };
};
export const deleteSubCategoryFail = (payLoad) => {
  return {
    type: PRODUCT_ACTIONS_TYPES.DELETE_PRODUCT_FAIL,
    payLoad,
  };
};