import React, { useState } from "react";
import "./Accordian.css";

const Accordian = ({ explorer }) => {
  const [expand, setExpand] = useState(true);

  return (
    <div className="main">
      <div className="main-title">
        <div
          style={{ color: explorer.hasData ? "blue" : "green" }}
          onClick={() => setExpand(!expand)}
        >
          {explorer?.name}
        </div>
        <p
          onClick={() => {
            setExpand(!expand);
          }}
        >
          {expand ? "-" : "+"}
        </p>
      </div>

      {explorer.hasData && (
        <div
          style={{
            display: expand ? "block" : "none"
          }}
        >
          {explorer?.items?.map((exp) => (
            <Accordian explorer={exp} />
          ))}
        </div>
      )}
    </div>
  );
};
export default Accordian;
