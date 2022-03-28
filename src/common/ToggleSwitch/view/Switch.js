import React from "react";
import "./switch.css";

const Switch = ({ rounded = true, isToggle, onToggle }) => {
  return (
    <div>
      <label className="switch">
        <input type="checkbox" checked={isToggle} onChange={onToggle} />
        <span className={`slider ${rounded && "rounded"}`} />
      </label>
    </div>
  );
};

export default Switch;
