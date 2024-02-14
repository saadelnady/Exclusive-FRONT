import {
  CATEGORIES_ACTIONS_TYPES,
  CATEGORY_ACTIONS_TYPES,
} from "../../actions/actionTypes";

const initialState = {
  isLoading: false,
  error: null,
  categories: [],
  category: {},
  message: "",
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
      console.log("action.payLoad ======= >", action.payLoad);
      return { ...state, isLoading: false, category: action.payLoad };

    case CATEGORY_ACTIONS_TYPES.GET_CATEGORY_FAIL:
      return { ...state, error: action.payLoad };

    // ==================================================

    case CATEGORY_ACTIONS_TYPES.POST_CATEGORY:
      return { ...state, isLoading: true };

    case CATEGORY_ACTIONS_TYPES.POST_CATEGORY_SUCCESS:
      return {
        ...state,
        isLoading: false,
        error: null,
        categories: [...state.categories, action.payLoad.data.category],
        category: {},
        message: action.payLoad.message,
      };

    case CATEGORY_ACTIONS_TYPES.POST_CATEGORY_FAIL:
      return {
        ...state,
        isLoading: false,
        error: "error",
        message: action.payLoad,
      };

    // ==================================================

    case CATEGORY_ACTIONS_TYPES.PUT_CATEGORY:
      return { ...state, isLoading: true };

    case CATEGORY_ACTIONS_TYPES.PUT_CATEGORY_SUCCESS:
      return {
        ...state,
        isLoading: false,
        categories: [],
        category: {},
      };

    case CATEGORY_ACTIONS_TYPES.PUT_CATEGORY_FAIL:
      return { ...state, isLoading: false, error: "error" };

    // ==================================================

    case CATEGORY_ACTIONS_TYPES.DELETE_CATEGORY:
      return { ...state, isLoading: true, error: null };

    case CATEGORY_ACTIONS_TYPES.DELETE_CATEGORY_SUCCESS:
      const updatedCategories = state.categories.filter(
        (category) => category.id !== action.payLoad
      );
      return {
        ...state,
        isLoading: false,
        error: null,
        categories: updatedCategories,
      };

    case CATEGORY_ACTIONS_TYPES.DELETE_CATEGORY_FAIL:
      return { ...state, isLoading: false, error: action.payLoad };

    default:
      return state;
  }
};
export { categoryReducer };
