import {
  setTheme,
  setThemeSuccess,
  setThemeFail,
} from "./themeActionsCreators";

export const toggleTheme = () => {
  return async (dispatch) => {
    dispatch(setTheme());

    try {
      const currentTheme = localStorage.getItem("theme") || "light";
      const newTheme = currentTheme === "light" ? "dark" : "light";
      localStorage.setItem("theme", newTheme);
      dispatch(setThemeSuccess(newTheme));
    } catch (error) {
      // Dispatch failure with an error message
      dispatch(setThemeFail(error.message || "Failed to toggle theme"));
    }
  };
};
