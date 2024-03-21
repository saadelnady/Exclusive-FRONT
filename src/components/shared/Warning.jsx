import React from "react";
import { CiWarning } from "react-icons/ci";
import "./styles/Warning.css";
const Warning = ({ handleWarning, action }) => {
  const { Icon, message, subMessage, actionHandler, id } = action;

  return (
    <div className="warning-layout">
      <div className="warning">
        <CiWarning className="warning-icon" />
        <h1 className="warning-message">{message?.EN}</h1>
        {subMessage && <p className="warning-sub-messge">{subMessage?.EN}</p>}
        <div className="actions">
          <button
            onClick={() => {
              actionHandler(id);
              handleWarning();
            }}
          >
            {Icon}
            {action?.type?.EN}
          </button>
          <button onClick={handleWarning}>Cancel</button>
        </div>
      </div>
    </div>
  );
};

export default Warning;
