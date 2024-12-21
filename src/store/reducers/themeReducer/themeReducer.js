import { THEME_ACTIONS_TYPES } from "../../actions/actionTypes";

const initialValues = {
  theme: localStorage.getItem("theme") || "light", // Initialize with saved theme or default to 'light'
  error: null,
};

const themeReducer = (state = initialValues, action) => {
  switch (action.type) {
    case THEME_ACTIONS_TYPES.SET_THEME:
      return { ...state, error: null }; // Reset error on setting theme
    case THEME_ACTIONS_TYPES.SET_THEME_SUCCESS:
      return { ...state, theme: action.payload }; // Update theme on success
    case THEME_ACTIONS_TYPES.SET_THEME_FAIL:
      return { ...state, error: action.payload }; // Set error if theme change fails
    default:
      return state;
  }
};

export { themeReducer };
