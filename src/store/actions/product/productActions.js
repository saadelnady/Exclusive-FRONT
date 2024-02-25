import { getData, postData } from "../../../API/API";
import { showToast } from "../../../helpers/toast_helper";
import * as actionsCreators from "./productActionsCreators";

export const fetchProducts = () => {
  return async (dispatch) => {
    dispatch(actionsCreators.getProducts());
    try {
      const response = await getData(`/api/products`);
      dispatch(actionsCreators.getProductsSuccess(response.data.products));
    } catch (error) {
      dispatch(actionsCreators.getProductsFail(error));
    }
  };
};
export const fetchSellerProducts = (sellerId) => {
  return async (dispatch) => {
    dispatch(actionsCreators.getSellerProducts(sellerId));
    try {
      const response = await getData(
        `/api/products/sellerProducts?sellerId=${sellerId}`
      );
      dispatch(actionsCreators.getSellerProductsSuccess(response));
    } catch (error) {
      dispatch(actionsCreators.getSellerProductsFail(error));
    }
  };
};
/* ================================================================================================== */

export const fetchProduct = ({ productId }) => {
  return async (dispatch) => {
    dispatch(actionsCreators.getProduct(productId));
    try {
      const response = await getData(`/api/products/${productId}`);
      dispatch(actionsCreators.getProductSuccess(response.data.product));
    } catch (error) {
      dispatch(actionsCreators.getProductFail(error));
    }
  };
};
/* ================================================================================================== */

export const addProduct = ({ formData, toast }) => {
  return async (dispatch) => {
    dispatch(actionsCreators.addProduct(formData));
    try {
      const response = await postData(`/api/products`, formData);
      dispatch(actionsCreators.addProductSuccess(response));
      showToast(toast, response.message, "success");
    } catch (error) {
      dispatch(actionsCreators.addProductFail(error?.response?.data?.message));
      showToast(toast, error?.response?.data?.message, "error");
    }
  };
};
