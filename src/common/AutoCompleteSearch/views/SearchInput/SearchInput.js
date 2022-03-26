import React from "react";
import './searchInput.css';

const SearchInput = ({name, filter}) => {
  return (
    <>
      <input
       type="search"
       value={name}
       className="input-field"
       onChange={filter}
       placeholder="Filter"
      />
    </>
  );
};

export default SearchInput;
