import { getData, postData } from "../../../API/API";
import { showToast } from "../../../helpers/toast_helper";
import * as actionsCreators from "./cartActionsCreators";

export const addToCart = (data, toast) => {
  return async (dispatch) => {
    try {
      dispatch(actionsCreators.addToCart());
      const response = await postData(`/api/cart/addToCart`, data);
      if (response.status === "success") {
        dispatch(actionsCreators.addToCartSuccess(response));
        showToast(toast, response?.message, "success");
      }
    } catch (error) {
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
      console.log("response", response);

      if (response.status === "success") {
        dispatch(actionsCreators.getCartSuccess(response?.data?.cart));
      }
    } catch (error) {
      dispatch(actionsCreators.getCartFail(error?.response?.data?.message));
    }
  };
};
