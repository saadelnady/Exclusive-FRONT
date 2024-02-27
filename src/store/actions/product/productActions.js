import { deleteData, getData, postData, putData } from "../../../API/API";
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
/* ================================================================================================== */

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

export const fetchProduct = (productId) => {
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
/* ================================================================================================== */

export const editProduct = ({ formData, toast, productId }) => {
  return async (dispatch) => {
    dispatch(actionsCreators.editProduct(formData));
    try {
      const response = await putData(`/api/products/${productId}`, formData);
      console.log("response edit ========>", response);

      dispatch(actionsCreators.editProductSuccess(response));
      showToast(toast, response.message, "success");
    } catch (error) {
      dispatch(actionsCreators.editProductFail(error?.response?.data?.message));
      showToast(toast, error?.response?.data?.message, "error");
    }
  };
};

/* ================================================================================================== */

export const deleteProduct = ({ productId, toast }) => {
  return async (dispatch) => {
    dispatch(actionsCreators.deleteProduct(productId));
    try {
      const response = await deleteData(`/api/products/${productId}`);

      dispatch(actionsCreators.deleteProductSuccess(response));
      showToast(toast, response?.data?.message, "success");
    } catch (error) {
      dispatch(
        actionsCreators.deleteProductFail(error?.response?.data?.message)
      );
      showToast(toast, error?.response?.data?.message, "error");
    }
  };
};
