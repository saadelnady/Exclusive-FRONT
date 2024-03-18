import {
  SELLERS_ACTIONS_TYPES,
  SELLER_ACTIONS_TYPES,
} from "../../actions/actionTypes";

const initialState = {
  isLoggedIn: false,
  isLoading: false,
  error: null,
  seller: {},
  sellers: [],
};

const sellerReducer = (state = initialState, action) => {
  switch (action.type) {
    case SELLER_ACTIONS_TYPES.GET_SELLER:
      return { ...state, isLoading: true };

    case SELLER_ACTIONS_TYPES.GET_SELLER_SUCCESS:
      return {
        ...state,
        isLoggedIn: true,
        isLoading: false,
        seller: { ...action.payLoad },
        error: null,
      };

    case SELLER_ACTIONS_TYPES.GET_SELLER_FAIL:
      return { ...state, error: action.payLoad, isLoggedIn: false };
    // ======================================================================================
    case SELLER_ACTIONS_TYPES.GET_SELLER_PROFILE:
      return { ...state, isLoading: true };

    case SELLER_ACTIONS_TYPES.GET_SELLER_PROFILE_SUCCESS:
      return {
        ...state,
        isLoggedIn: true,
        isLoading: false,
        seller: { ...action.payLoad },
        error: null,
      };

    case SELLER_ACTIONS_TYPES.GET_SELLER_PROFILE_FAIL:
      return { ...state, error: action.payLoad, isLoggedIn: false };
    // ======================================================================================

    case SELLERS_ACTIONS_TYPES.GET_SELLERS:
      return { ...state, isLoading: true };

    case SELLERS_ACTIONS_TYPES.GET_SELLERS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        sellers: action.payLoad,
        error: null,
      };
    case SELLERS_ACTIONS_TYPES.GET_SELLERS_FAIL:
      return {
        ...state,
        isLoading: false,
        error: action.payLoad,
      };

    default:
      return state;
  }
};
export { sellerReducer };
