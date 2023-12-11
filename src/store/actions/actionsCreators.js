import * as actionTypes from "./actionTypes";

export const loadUser = () => {
  return {
    type: actionTypes.LOAD_USER,
  };
};

export const getUserSuccess = (payLoad) => {
  return {
    type: actionTypes.GET_USER_SUCCESS,
    payLoad,
  };
};

export const getUserFail = (payLoad) => {
  return {
    type: actionTypes.GET_USER_FAIL,
    payLoad,
  };
};

export const clearError = () => {
  return {
    type: actionTypes.CLEAR_ERROR,
  };
};
