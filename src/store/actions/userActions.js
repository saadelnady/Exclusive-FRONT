import { getData, serverUrl } from "../../API/API";
import * as actionCreators from "./userActionsCreators";

export const fetchUser = () => {
  return async (dispatch) => {
    dispatch(actionCreators.loadUser());
    try {
      const data = await getData(`${serverUrl}/api/users/getProfile`);
      dispatch(actionCreators.getUserSuccess(data.user));
    } catch (error) {
      dispatch(actionCreators.getUserFail(error));
    }
  };
};
export const fetchUsers = () => {
  return async (dispatch) => {
    dispatch(actionCreators.loadUsers());
    try {
      const data = await getData(`${serverUrl}/api/users`);
      console.log(data);
      dispatch(actionCreators.getUsersSuccess(data.users));
    } catch (error) {
      dispatch(actionCreators.getUsersFail(error));
    }
  };
};
