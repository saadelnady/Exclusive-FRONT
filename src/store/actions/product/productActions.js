import { deleteData, getData, postData, putData } from "../../../API/API";
import { showToast } from "../../../helpers/toast_helper";
import * as actionsCreators from "./productActionsCreators";

export const fetchAcceptedProducts = ({
  limit = "",
  page = "",
  text = "",
} = {}) => {
  return async (dispatch) => {
    dispatch(actionsCreators.getAcceptedProducts());
    try {
      let response = "";
      if (text) {
        response = await getData(
          `/api/products?limit=${limit}&page=${page}&text=${text}`
        );
      } else if (limit && page) {
        response = await getData(`/api/products?limit=${limit}&page=${page}`);
      } else {
        response = await getData(`/api/products`);
      }

      dispatch(actionsCreators.getAcceptedProductsSuccess(response.data));
    } catch (error) {
      dispatch(actionsCreators.getAcceptedProductsFail(error));
      console.log("error --->", error);
    }
  };
};
/* ================================================================================================== */
export const fetchSellerProducts = ({
  limit = "",
  page = "",
  text = "",
  sellerId = "",
} = {}) => {
  return async (dispatch) => {
    dispatch(actionsCreators.getSellerProducts(sellerId));
    try {
      let response = "";
      if (text) {
        response = await getData(
          `/api/products/sellerProducts?sellerId=${sellerId}&limit=${limit}&page=${page}&text=${text}`
        );
      } else if (limit && page) {
        response = await getData(
          `/api/products/sellerProducts?sellerId=${sellerId}&limit=${limit}&page=${page}`
        );
      } else {
        response = await getData(
          `/api/products/sellerProducts?sellerId=${sellerId}`
        );
      }

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
      showToast(toast, response?.message, "success");
    } catch (error) {
      dispatch(
        actionsCreators.deleteProductFail(error?.response?.data?.message)
      );
      showToast(toast, error?.response?.data?.message, "error");
    }
  };
};
/* ================================================================================================== */
export const fetchPendingProducts = ({
  limit = "",
  page = "",
  text = "",
} = {}) => {
  return async (dispatch) => {
    dispatch(actionsCreators.getPendingProducts());
    try {
      let response = "";
      if (text) {
        response = await getData(
          `/api/products/pendingProducts?limit=${limit}&page=${page}&text=${text}`
        );
      } else {
        response = await getData(
          `/api/products/pendingProducts?limit=${limit}&page=${page}`
        );
      }

      dispatch(actionsCreators.getPendingProductsSuccess(response));
    } catch (error) {
      dispatch(actionsCreators.getPendingProductsFail(error));
    }
  };
};
/* ================================================================================================== */
export const fetchBlockedProducts = ({
  limit = "",
  page = "",
  text = "",
} = {}) => {
  return async (dispatch) => {
    dispatch(actionsCreators.getBlockedProducts());
    try {
      let response = "";
      if (text) {
        response = await getData(
          `/api/products/blockedProducts?limit=${limit}&page=${page}&text=${text}`
        );
      } else {
        response = await getData(
          `/api/products/blockedProducts?limit=${limit}&page=${page}`
        );
      }

      dispatch(actionsCreators.getBlockedProductsSuccess(response));
    } catch (error) {
      dispatch(actionsCreators.getBlockedProductsFail(error));
    }
  };
};
/* ================================================================================================== */
export const acceptProduct = ({ productId, toast }) => {
  return async (dispatch) => {
    dispatch(actionsCreators.acceptProduct());
    try {
      const response = await putData(
        `/api/products/acceptProduct/${productId}`
      );
      dispatch(actionsCreators.acceptProductSuccess(response));
      showToast(toast, response?.message, "success");
    } catch (error) {
      dispatch(actionsCreators.acceptProductFail(error));
      showToast(toast, error?.response?.data?.message, "error");
    }
  };
};
/* ================================================================================================== */
export const blockProduct = ({ productId, toast }) => {
  return async (dispatch) => {
    dispatch(actionsCreators.blockProduct());
    try {
      const response = await putData(`/api/products/blockProduct/${productId}`);
      dispatch(actionsCreators.blockProductSuccess(response));
      showToast(toast, response?.message, "success");
    } catch (error) {
      dispatch(actionsCreators.blockProductFail(error));
      showToast(toast, error?.response?.data?.message, "error");
    }
  };
};
/* ================================================================================================== */
export const unBlockProduct = ({ productId, toast }) => {
  return async (dispatch) => {
    dispatch(actionsCreators.unBlockProduct());
    try {
      const response = await putData(
        `/api/products/unblockProduct/${productId}`
      );
      dispatch(actionsCreators.unBlockProductSuccess(response));
      showToast(toast, response?.message, "success");
    } catch (error) {
      dispatch(actionsCreators.unBlockProductFail(error));
      showToast(toast, error?.response?.data?.message, "error");
    }
  };
};
