import { getData, serverUrl } from "../../API/API";
import * as actionCreators from "./userActionsCreators";

export const fetchUser = () => {
  return async (dispatch) => {
    dispatch(actionCreators.getUser());
    try {
      const data = await getData(`${serverUrl}/api/users/getUserProfile`);
      dispatch(actionCreators.getUserSuccess(data.user));
    } catch (error) {
      dispatch(actionCreators.getUserFail(error));
    }
  };
};
export const fetchUsers = () => {
  return async (dispatch) => {
    dispatch(actionCreators.getUsers());
    try {
      const data = await getData(`${serverUrl}/api/users`);
      dispatch(actionCreators.getUsersSuccess(data.users));
    } catch (error) {
      dispatch(actionCreators.getUsersFail(error));
    }
  };
};
