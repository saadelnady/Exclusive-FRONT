import * as actionTypes from "../actions/actionTypes";

const initialState = {
  isAuthenticated: false,
  loading: false,
  user: {},
  error: null,
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.LOAD_USER:
      return { ...state, loading: true };
    case actionTypes.GET_USER_SUCCESS:
      return {
        ...state,
        loading: false,
        isAuthenticated: true,
        user: action.payLoad,
        error: null,
      };
    case actionTypes.GET_USER_FAIL:
      return {
        ...state,
        loading: false,
        isAuthenticated: false,
        error: action.payLoad,
      };
    case actionTypes.CLEAR_ERROR:
      return { ...state, error: null };

    default:
      return state;
  }
};

export { userReducer };
