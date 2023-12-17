import { getData, serverUrl } from "../../API/API";
import * as actionCreators from "./productsActionsCreators";

export const fetchProducts = () => {
  return async (dispatch) => {
    dispatch(actionCreators.LOAD_PRODUCTS());
    try {
      const data = await getData(`${serverUrl}/api/products`);
      dispatch(actionCreators.GET_PRODUCTS_SUCCESS(data.products));
    } catch (error) {
      dispatch(actionCreators.GET_PRODUCTS_FAIL(error));
    }
  };
};
