import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { toggleTheme } from "../../../store/actions/theme/themeActions";
const ToggleTheme = () => {
  const { theme } = useSelector((state) => state.themeReducer);
  const dispatch = useDispatch();
  console.log(theme);

  const handleToggle = () => {
    dispatch(toggleTheme());
  };

  return (
    <div className={`app ${theme}`}>
      <p>Current Theme: {theme}</p>
      <button onClick={handleToggle}>
        {theme === "light" ? "Toggle Dark" : "Toggle Light"}
      </button>
    </div>
  );
};

export default ToggleTheme;
