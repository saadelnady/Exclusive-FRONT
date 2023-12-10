import { getData, serverUrl } from "../../API/API";

const getUser = (payLoad) => {
  return {
    type: "GETUSER",
    payLoad,
  };
};
const fetchUser = () => {
  return async (dispatch) => {
    getData(`${serverUrl}/api/users/getProfile`).then((data) => {
      dispatch(getUser(data));
    });
  };
};

export { fetchUser };
