import React from "react";
import { CiWarning } from "react-icons/ci";
import "./styles/Warning.css";
const Warning = ({ handleWarning, messege, subMessege, handleAction }) => {
  return (
    <div className="warning-layout">
      <div className="warning">
        <CiWarning className="warning-icon" />
        <h1 className="warning-messge">{messege}</h1>
        {subMessege && <p className="warning-sub-messge">{subMessege}</p>}
        <div className="actions">
          <button onClick={handleAction}>Delete</button>
          <button onClick={handleWarning}>Cancel</button>
        </div>
      </div>
    </div>
  );
};

export default Warning;
