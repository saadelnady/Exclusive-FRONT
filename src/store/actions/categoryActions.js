import { getData, serverUrl } from "../../API/API";
import * as actionCreators from "./categoryActionsCreators";

export const fetchCategories = () => {
  return async (dispatch) => {
    dispatch(actionCreators.getCategories);
    try {
      const data = await getData(`${serverUrl}/api/categories`);
      console.log(data);
      dispatch(actionCreators.getCategoriesSuccess(data.categories));
    } catch (error) {
      dispatch(actionCreators.getCategoriesFail(error));
    }
  };
};
