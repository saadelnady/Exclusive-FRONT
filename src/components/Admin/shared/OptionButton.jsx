import React from "react";

export const OptionButton = ({
  action = {},
  handleWarning = () => {},
  setAction = () => {},
  id = "",
  actionHandler = () => {},
} = {}) => {
  const { type, Icon } = action;

  return (
    <button
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
