import {
  CATEGORIES_ACTIONS_TYPES,
  CATEGORY_ACTIONS_TYPES,
} from "../actions/actionTypes";

const initialState = {
  isLoading: false,
  error: null,
  categories: [],
  category: {},
};

const categoryReducer = (state = initialState, action) => {
  switch (action.type) {
    case CATEGORIES_ACTIONS_TYPES.GET_CATEGORIES:
      return { ...state, isLoading: true };

    case CATEGORIES_ACTIONS_TYPES.GET_CATEGORIES_SUCCESS:
      return {
        ...state,
        isLoading: false,
        categories: action.payLoad,
        error: null,
      };

    case CATEGORIES_ACTIONS_TYPES.GET_CATEGORIES_FAIL:
      return { ...state, error: action.payLoad };
    // ==================================================
    case CATEGORY_ACTIONS_TYPES.GET_CATEGORY:
      return { ...state, isLoading: true };

    case CATEGORY_ACTIONS_TYPES.GET_CATEGORY_SUCCESS:
      return { ...state, isLoading: false, category: action.payLoad };

    case CATEGORY_ACTIONS_TYPES.GET_CATEGORY_FAIL:
      return { ...state, error: action.payLoad };

    default:
      return state;
  }
};
export { categoryReducer };
