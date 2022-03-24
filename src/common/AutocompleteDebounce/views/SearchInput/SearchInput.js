import React from "react";

const SearchInput = ({value,onChangeText}) => {
  return (
    <>
      <input
        className="input-field"
        type="text"
        value={value}
        name ="Search"
        onChange={onChangeText}
      />
    </>
  );
};

export default SearchInput;
