import React from "react";
import { CiWarning } from "react-icons/ci";
import "./styles/Warning.css";
const Warning = ({
  handleWarning,

  action,
}) => {
  return (
    <div className="warning-layout">
      <div className="warning">
        <CiWarning className="warning-icon" />
        <h1 className="warning-message">{action.message}</h1>
        {action?.subMessage && (
          <p className="warning-sub-messge">{action?.subMessage}</p>
        )}
        <div className="actions">
          <button
            onClick={() => {
              action.actionHandler();
              handleWarning();
            }}
          >
            {action.type}
          </button>
          <button onClick={handleWarning}>Cancel</button>
        </div>
      </div>
    </div>
  );
};

export default Warning;
