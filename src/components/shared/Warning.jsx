import React from "react";
import { CiWarning } from "react-icons/ci";
import "./styles/Warning.css";
const Warning = ({
  handleWarning,
  message,
  subMessage,
  handleAction,
  action,
}) => {
  return (
    <div className="warning-layout">
      <div className="warning">
        <CiWarning className="warning-icon" />
        <h1 className="warning-messge">{message}</h1>
        {subMessage && <p className="warning-sub-messge">{subMessage}</p>}
        <div className="actions">
          <button onClick={handleAction}>{action}</button>
          <button onClick={handleWarning}>Cancel</button>
        </div>
      </div>
    </div>
  );
};

export default Warning;
