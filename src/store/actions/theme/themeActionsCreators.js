import { THEME_ACTIONS_TYPES } from "../actionTypes";

export const setTheme = () => {
  return { type: THEME_ACTIONS_TYPES.SET_THEME };
};

export const setThemeSuccess = (payload) => {
  return { type: THEME_ACTIONS_TYPES.SET_THEME_SUCCESS, payload };
};

export const setThemeFail = (payload) => {
  return { type: THEME_ACTIONS_TYPES.SET_THEME_FAIL, payload };
};
