import { getData, postData } from "../../../API/API";
import { showToast } from "../../../helpers/toast_helper";

import * as actionCreators from "./userActionsCreators";

export const fetchUser = () => {
  return async (dispatch) => {
    dispatch(actionCreators.getUser());
    try {
      const data = await getData(`/api/users/getUserProfile`);
      dispatch(actionCreators.getUserSuccess(data.data.user));
    } catch (error) {
      dispatch(actionCreators.getUserFail(error));
    }
  };
};
export const loginUser = ({ values, toast }) => {
  return async (dispatch) => {
    dispatch(actionCreators.postUserLogin(values));
    try {
      const response = await postData(`/api/users/login`, values);
      dispatch(actionCreators.postUserLoginSuccess(response?.data?.role));
      localStorage.setItem("TOKEN", JSON.stringify(response?.data?.token));
      showToast(toast, response?.message, "success");
    } catch (error) {
      console.log("error   ===== >", error?.response?.data?.message);
      dispatch(actionCreators.postUserLoginFail(error));
      showToast(toast, error?.response?.data?.message, "error");
    }
  };
};
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
