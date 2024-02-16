import { getData, postData } from "../../../API/API";
import { showToast } from "../../../helpers/toast_helper";

import * as actionCreators from "./userActionsCreators";
// ========================================================================================

export const fetchUser = () => {
  return async (dispatch) => {
    dispatch(actionCreators.getUser());
    try {
      const response = await getData(`/api/users/getUserProfile`);
      dispatch(actionCreators.getUserSuccess(response.data.user));
    } catch (error) {
      dispatch(actionCreators.getUserFail(error));
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
        if (role === "ADMIN") {
          navigate("/admin");
        } else {
          navigate("/");
        }
        window.location.reload();
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
        } else {
          navigate("/");
        }

        window.location.reload();
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
        navigate("/");
        window.location.reload();
      });
      dispatch(actionCreators.postUserRegisterSuccess(response?.data));
    } catch (error) {
      dispatch(actionCreators.postUserRegisterFail(error));
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
