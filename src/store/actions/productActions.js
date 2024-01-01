import { getData, serverUrl } from "../../API/API";
import * as actionCreators from "./productActionsCreators";

export const fetchProducts = () => {
  return async (dispatch) => {
    dispatch(actionCreators.getProducts);
    try {
      const data = await getData(`${serverUrl}/api/products`);

      dispatch(actionCreators.getProductsSuccess(data.products));
    } catch (error) {
      dispatch(actionCreators.getProductsFail(error));
    }
  };
};
