import { getData, postData } from "../../../API/API";
import { showToast } from "../../../helpers/toast_helper";
import * as actionCreators from "./sellerActionsCreators";

export const fetchSeller = () => {
  return async (dispatch) => {
    dispatch(actionCreators.getSeller());
    try {
      const response = await getData(`/api/sellers/getSellerProfile`);
      dispatch(actionCreators.getSellerSuccess(response?.data?.seller));
    } catch (error) {
      dispatch(actionCreators.getSellerFail(error));
    }
  };
};
export const sellerLogin = ({ values, toast, navigate }) => {
  return async (dispatch) => {
    dispatch(actionCreators.postSellerLogin(values));
    try {
      const response = await postData(`/api/sellers/login`, values);
      console.log("response login ---->", response);
      dispatch(actionCreators.postSellerLoginSuccess(response?.data));
      localStorage.setItem("TOKEN", JSON.stringify(response?.data?.token));
      showToast(toast, response?.message, "success");
      setTimeout(() => {
        navigate("/Seller");
        window.location.reload();
      }, 2500);
    } catch (error) {
      dispatch(actionCreators.postSellerLoginFail(error));
      showToast(toast, error?.response?.data?.message, "error");
    }
  };
};
// ========================================================================================

export const sellerLogout = ({ toast, navigate }) => {
  return async (dispatch) => {
    dispatch(actionCreators.postSellerLogout());

    try {
      dispatch(actionCreators.postSellerLogoutSuccess());
      localStorage.removeItem("TOKEN");
      showToast(toast, "You have logged out successfully", "success");

      setTimeout(() => {
        navigate("/seller/login");
        window.location.reload();
      }, 2500);
    } catch (error) {
      dispatch(actionCreators.postSellerLogoutFail());
      showToast(toast, "Something wrong when logout", "error");
    }
  };
};
// ========================================================================================
export const sellerRegister = ({ values, toast, navigate }) => {
  return async (dispatch) => {
    dispatch(actionCreators.postSellerRegister(values));

    try {
      const response = await postData("/api/sellers/register", values);

      localStorage.setItem("TOKEN", JSON.stringify(response?.data?.token));
      showToast(toast, response?.message, "success");
      setTimeout(() => {
        navigate("/Seller");
        window.location.reload();
      });
      dispatch(actionCreators.postSellerRegisterSuccess(response?.data));
    } catch (error) {
      dispatch(actionCreators.postSellerRegisterFail(error));
      showToast(toast, error?.response?.data?.message, "error");
    }
  };
};

// =========================================================================================
export const fetchSellers = () => {
  return async (dispatch) => {
    dispatch(actionCreators.getSellers());
    try {
      const response = await getData(`/api/sellers`);
      dispatch(actionCreators.getSellersSuccess(response?.data?.sellers));
    } catch (error) {
      dispatch(actionCreators.getSellersFail(error));
    }
  };
};
