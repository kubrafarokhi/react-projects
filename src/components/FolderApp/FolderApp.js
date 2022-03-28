import React, { useState } from "react";

const FolderApp = ({ explorer }) => {
  const [expand, setExpand] = useState(true);

  return (
    <div style={{ paddingLeft: 30 }}>
      <div
        style={{ color: explorer.isFolder ? "blue" : "green" }}
        onClick={() => setExpand(!expand)}
      >
        {explorer?.name}
      </div>
      {explorer.isFolder && (
        <div
          style={{
            display: expand ? "block" : "none",
            paddingLeft: 30
          }}
        >
          {explorer?.items?.map((exp) => (
            <FolderApp explorer={exp} />
          ))}
        </div>
      )}
    </div>
  );
};
export default FolderApp;
