import { getData, postData, serverUrl } from "../../../API/API";
import { showToast } from "../../../helpers/toast_helper";
import * as actionCreators from "./productActionsCreators";

export const fetchProducts = () => {
  return async (dispatch) => {
    dispatch(actionCreators.getProducts);
    try {
      const data = await getData(`/api/products`);

      dispatch(actionCreators.getProductsSuccess(data.data.products));
    } catch (error) {
      dispatch(actionCreators.getProductsFail(error));
    }
  };
};
/* ================================================================================================== */

export const fetchProduct = ({ productId }) => {
  return async (dispatch) => {
    dispatch(actionCreators.getProduct(productId));
    try {
      const response = await getData(`/api/products/${productId}`);
      dispatch(actionCreators.getProductSuccess(response.data.product));
    } catch (error) {
      dispatch(actionCreators.getProductFail(error));
    }
  };
};
/* ================================================================================================== */

export const addProduct = ({ formData, toast }) => {
  return async (dispatch) => {
    dispatch(actionCreators.addProduct(formData));
    try {
      const response = await postData(`/api/products`, formData);

      dispatch(actionCreators.addProductSuccess(response.data.product));
      showToast(toast, response.message, "success");
    } catch (error) {
      dispatch(actionCreators.addProductFail(error));
    }
  };
};
