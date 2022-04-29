import React from "react";
import "./progressbar.css";

const Progressbar = ({ bgcolor, uploadPercentage }) => {
  const colorStyle = {
    height: "100%",
    width: `${uploadPercentage}%`,
    backgroundColor: bgcolor,
    textAlign: "right",
    transition: "width 1s ease-in-out",
    borderRadius: "inherit"
  };

  return (
    <div className="progressbar-container">
      <div style={colorStyle}>
        <span className={"percentage-style"}>{`${uploadPercentage}`}</span>
      </div>
    </div>
  );
};
export default Progressbar;
