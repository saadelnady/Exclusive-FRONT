import { getData } from "../../API/API";
import * as actionCreators from "./sellerActionsCreators";

export const fetchSeller = () => {
  return async (dispatch) => {
    dispatch(actionCreators.getSeller());
    try {
      const data = await getData(`/api/sellers/getSellerProfile`);
      dispatch(actionCreators.getSellerSuccess(data.seller));
    } catch (error) {
      dispatch(actionCreators.getSellerFail(error));
    }
  };
};

// =========================================================================================
export const fetchSellers = () => {
  return async (dispatch) => {
    dispatch(actionCreators.getSellers());
    try {
      const data = await getData(`/api/sellers`);
      dispatch(actionCreators.getSellersSuccess(data.sellers));
    } catch (error) {
      dispatch(actionCreators.getSellersFail(error));
    }
  };
};
