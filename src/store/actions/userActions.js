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
