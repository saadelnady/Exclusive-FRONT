import * as actionTypes from "../actions/actionTypes";

const initialState = {
  loading: false,
  products: [],
  error: null,
};

const productsReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.LOAD_PRODUCTS:
      return { ...state, loading: true };

    case actionTypes.GET_PRODUCTS_SUCCESS:
      return {
        ...state,
        products: action.payLoad,
        loading: false,
        error: null,
      };

    case actionTypes.GET_PRODUCTS_FAIL:
      return { ...state, loading: false, error: action.payLoad };

    case actionTypes.CLEAR_ERROR:
      return { ...state, error: null };

    default:
      return state;
  }
};

export { productsReducer };
