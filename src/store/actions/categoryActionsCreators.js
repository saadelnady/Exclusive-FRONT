import { CATEGORIES_ACTIONS_TYPES } from "./actionTypes";

export const getCategories = () => {
  return {
    type: CATEGORIES_ACTIONS_TYPES.GET_CATEGORIES,
  };
};
export const getCategoriesSuccess = (payLoad) => {
  return {
    type: CATEGORIES_ACTIONS_TYPES.GET_CATEGORIES_SUCCESS,
    payLoad,
  };
};
export const getCategoriesFail = (payLoad) => {
  return {
    type: CATEGORIES_ACTIONS_TYPES.GET_CATEGORIES_FAIL,
    payLoad,
  };
};

// ==================================================================================
// export const loadProduct = () => {
//   return {
//     type: PRODUCT_ACTIONS_TYPES.GET_PRODUCT,
//   };
// };

// export const getProductSuccess = (payLoad) => {
//   return {
//     type: PRODUCT_ACTIONS_TYPES.GET_PRODUCT_SUCCESS,
//     payLoad,
//   };
// };

// export const getProductFail = (payLoad) => {
//   return {
//     type: PRODUCT_ACTIONS_TYPES.GET_PRODUCT_FAIL,
//     payLoad,
//   };
// };
