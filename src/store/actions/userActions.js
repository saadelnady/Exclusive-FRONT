import { getData, serverUrl } from "../../API/API";
import * as actionCreators from "./actionsCreators";

export const fetchUser = () => {
  return async (dispatch) => {
    dispatch(actionCreators.loadUser());
    try {
      const data = await getData(`${serverUrl}/api/users/getProfile`);
      dispatch(actionCreators.getUserSuccess(data));
    } catch (error) {
      dispatch(actionCreators.getUserFail(error));
    }
  };
};
