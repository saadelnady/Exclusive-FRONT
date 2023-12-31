import { USERS_ACTIONS_TYPES, USER_ACTIONS_TYPES } from "./actionTypes";

export const getUser = () => {
  return {
    type: USER_ACTIONS_TYPES.GET_USER,
  };
};
export const getUserSuccess = (payLoad) => {
  return {
    type: USER_ACTIONS_TYPES.GET_USER_SUCCESS,
    payLoad,
  };
};
export const getUserFail = (payLoad) => {
  return {
    type: USER_ACTIONS_TYPES.GET_USER_FAIL,
    payLoad,
  };
};
//============================================================================
export const getUsers = () => {
  return {
    type: USERS_ACTIONS_TYPES.GET_USERS,
  };
};
export const getUsersSuccess = (payLoad) => {
  return {
    type: USERS_ACTIONS_TYPES.GET_USERS_SUCCESS,
    payLoad,
  };
};
export const getUsersFail = (payLoad) => {
  return {
    type: USERS_ACTIONS_TYPES.GET_USERS_FAIL,
    payLoad,
  };
};
//============================================================================
