import { PRODUCT_ACTIONS_TYPES } from "../actions/actionTypes";
import { PRODUCTS_ACTIONS_TYPES } from "../actions/actionTypes";

const initialState = {
  isLoading: false,
  product: {},
  products: [],
  error: null,
};

const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case PRODUCT_ACTIONS_TYPES.GET_PRODUCT:
      return { ...state, isLoading: true };

    case PRODUCT_ACTIONS_TYPES.GET_PRODUCT_SUCCESS:
      return {
        ...state,
        product: action.payLoad,
        isLoading: false,
        error: null,
      };

    case PRODUCT_ACTIONS_TYPES.GET_PRODUCT_FAIL:
      return { ...state, isLoading: false, error: action.payLoad };

    case PRODUCTS_ACTIONS_TYPES.GET_PRODUCTS:
      return { ...state, isLoading: true };

    case PRODUCTS_ACTIONS_TYPES.GET_PRODUCTS_SUCCESS:
      return {
        ...state,
        products: action.payLoad,
        isLoading: false,
        error: null,
      };

    case PRODUCTS_ACTIONS_TYPES.GET_PRODUCTS_FAIL:
      return { ...state, isLoading: false, error: action.payLoad };

    default:
      return state;
  }
};

export { productReducer };
