import {
  USERS_ACTIONS_TYPES,
  USER_ACTIONS_TYPES,
} from "../actions/actionTypes";

const initialState = {
  isUserAuthenticated: false,
  isLoading: false,
  error: null,
  user: {},
  users: [],
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case USER_ACTIONS_TYPES.GET_USER:
      return { ...state, isLoading: true };

    case USER_ACTIONS_TYPES.GET_USER_SUCCESS:
      return {
        ...state,
        isLoading: false,
        isUserAuthenticated: true,
        user: action.payLoad,
        error: null,
      };

    case USER_ACTIONS_TYPES.GET_USER_FAIL:
      return {
        ...state,
        isLoading: false,
        isUserAuthenticatedUser: false,
        error: action.payLoad,
      };

    case USERS_ACTIONS_TYPES.GET_USERS:
      return { ...state, isLoading: true };

    case USERS_ACTIONS_TYPES.GET_USERS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        users: action.payLoad,
        error: null,
      };

    case USERS_ACTIONS_TYPES.GET_USERS_FAIL:
      return {
        ...state,
        isLoading: false,
        error: action.payLoad,
      };

    default:
      return state;
  }
};

export { userReducer };
