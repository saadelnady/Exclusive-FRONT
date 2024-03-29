import { getData, postData, putData } from "../../../API/API";
import { showToast } from "../../../helpers/toast_helper";

import * as actionCreators from "./userActionsCreators";
// ========================================================================================

export const fetchUserProfile = () => {
  return async (dispatch) => {
    dispatch(actionCreators.getUserProfile());
    try {
      const response = await getData(`/api/users/getUserProfile`);
      dispatch(actionCreators.getUserProfileSuccess(response?.data?.user));
    } catch (error) {
      dispatch(actionCreators.getUserProfileFail(error));
    }
  };
};
// ========================================================================================

export const userLogin = ({ values, toast, navigate }) => {
  return async (dispatch) => {
    dispatch(actionCreators.postUserLogin(values));
    try {
      const response = await postData(`/api/users/login`, values);
      const role = response?.data?.role;
      dispatch(actionCreators.postUserLoginSuccess(response?.data));
      localStorage.setItem("TOKEN", JSON.stringify(response?.data?.token));
      showToast(toast, response?.message, "success");
      setTimeout(() => {
        if (localStorage.getItem("TOKEN")) {
          if (role === "ADMIN") {
            navigate("/admin");
          }
          if (role === "USER") {
            navigate("/");
          }
        }
      }, 2500);
    } catch (error) {
      dispatch(actionCreators.postUserLoginFail(error));
      showToast(toast, error?.response?.data?.message, "error");
    }
  };
};
// ========================================================================================

export const userLogout = ({ toast, navigate, role }) => {
  return async (dispatch) => {
    dispatch(actionCreators.postUserLogout());

    try {
      dispatch(actionCreators.postUserLogoutSuccess());
      localStorage.removeItem("TOKEN");
      showToast(toast, "You have logged out successfully", "success");

      setTimeout(() => {
        if (role === "ADMIN") {
          navigate("/user/login");
        }
        if (role === "USER") {
          navigate("/");
        }
      }, 2500);
    } catch (error) {
      dispatch(actionCreators.postUserLogoutFail());
      showToast(toast, "Something wrong when logout", "error");
    }
  };
};
// ========================================================================================
export const userRegister = ({ values, toast, navigate }) => {
  return async (dispatch) => {
    dispatch(actionCreators.postUserRegister(values));

    try {
      const response = await postData("/api/users/register", values);

      localStorage.setItem("TOKEN", JSON.stringify(response?.data?.token));
      showToast(toast, response?.message, "success");
      setTimeout(() => {
        if (localStorage.getItem("TOKEN")) {
          navigate("/");
        }
      });
      dispatch(actionCreators.postUserRegisterSuccess(response?.data));
    } catch (error) {
      dispatch(actionCreators.postUserRegisterFail(error));
      showToast(toast, error?.response?.data?.message, "error");
    }
  };
};
// ========================================================================================
export const editUserProfile = ({ userId, values, toast }) => {
  return async (dispatch) => {
    dispatch(actionCreators.putUserProfile());
    try {
      const response = await putData(`/api/users/${userId}`, values);
      dispatch(actionCreators.putUserProfileSuccess(response));
      showToast(toast, response?.data?.message, "success");
    } catch (error) {
      dispatch(actionCreators.putUserProfileFail(error));
      showToast(toast, error?.response?.data?.message, "error");
    }
  };
};
// ========================================================================================

export const fetchUsers = () => {
  return async (dispatch) => {
    dispatch(actionCreators.getUsers());
    try {
      const data = await getData(`/api/users`);
      dispatch(actionCreators.getUsersSuccess(data.data.users));
    } catch (error) {
      dispatch(actionCreators.getUsersFail(error));
    }
  };
};
