import { SELLER_ACTIONS_TYPES, SELLERS_ACTIONS_TYPES } from "../actionTypes";

export const getSeller = () => {
  return {
    type: SELLER_ACTIONS_TYPES.GET_SELLER,
  };
};
export const getSellerSuccess = (payLoad) => {
  return {
    type: SELLER_ACTIONS_TYPES.GET_SELLER_SUCCESS,
    payLoad,
  };
};
export const getSellerFail = (payLoad) => {
  return {
    type: SELLER_ACTIONS_TYPES.GET_SELLER_FAIL,
    payLoad,
  };
};
// =================================================================

export const getSellers = () => {
  return { type: SELLERS_ACTIONS_TYPES.GET_SELLERS };
};
export const getSellersSuccess = (payLoad) => {
  return { type: SELLERS_ACTIONS_TYPES.GET_SELLERS_SUCCESS, payLoad };
};
export const getSellersFail = (payLoad) => {
  return { type: SELLERS_ACTIONS_TYPES.GET_SELLERS_FAIL, payLoad };
};
