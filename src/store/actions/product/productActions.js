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
export const fetchProductsAddRequests = () => {
  return async (dispatch) => {
    dispatch(actionsCreators.getProductsAddRequests());
    try {
      const response = await getData(`/api/products/productsAddRequests`);
      dispatch(actionsCreators.getProductsAddRequestsSuccess(response));
    } catch (error) {
      dispatch(actionsCreators.getProductsAddRequestsFail(error));
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
export const fetchBlockedProducts = () => {
  return async (dispatch) => {
    dispatch(actionsCreators.getBlockedProducts());
    try {
      const response = await getData(`/api/products/blockedProducts`);
       dispatch(actionsCreators.getBlockedProductsSuccess(response));
    } catch (error) {
      dispatch(actionsCreators.getBlockedProductsFail(error));
    }
  };
};
