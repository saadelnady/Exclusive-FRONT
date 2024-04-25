import { getData, postData } from "../../../API/API";
import { showToast } from "../../../helpers/toast_helper";
import * as actionsCreators from "./cartActionsCreators";

export const addToCart = (data, toast) => {
  return async (dispatch) => {
    try {
      dispatch(actionsCreators.addToCart());
      const response = await postData(`/api/cart/add-to-cart`, data);
      dispatch(actionsCreators.addToCartSuccess(response));
      showToast(toast, response.message, "success");
    } catch (error) {
      console.log("error=== >", error);
      dispatch(actionsCreators.addToCartFail(error?.response?.data?.message));
      showToast(toast, error?.response?.data?.message, "error");
    }
  };
};
// =================================================================

export const getCart = (userId) => {
  return async (dispatch) => {
    try {
      dispatch(actionsCreators.getCart());
      const response = await getData(`/api/cart?userId=${userId}`);
      dispatch(actionsCreators.getCartSuccess(response));
    } catch (error) {
      console.log("error=== >", error);
      dispatch(actionsCreators.getCartFail(error?.response?.data?.message));
    }
  };
};
