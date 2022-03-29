import React from "react";

const Title = ({title,setTitle}) => {
  return (
    <div>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
    </div>
  );
};

export default Title;
