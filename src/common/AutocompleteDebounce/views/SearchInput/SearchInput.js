import React from "react";
import './searchInput.css';

const SearchInput = ({betterFunction}) => {
  return (
    <>
      <input
        className="input-field"
        type="text"
        name ="Search"
        onChange={betterFunction}
      />
    </>
  );
};

export default SearchInput;
