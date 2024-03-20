import React from "react";
import "./styles/OptionButton.css";
export const OptionButton = ({
  action = {},
  handleWarning = () => {},
  setAction = () => {},
  id = "",
  actionHandler = () => {},
  buttonStyle = "",
} = {}) => {
  const { type, Icon } = action;

  return (
    <button
      className={`option ${buttonStyle}`}
      onClick={() => {
        handleWarning();
        setAction({ ...action, id, actionHandler });
      }}
    >
      {Icon}
      {type?.EN}
    </button>
  );
};
