import React from "react";
import "./SearchBox.css";
const SearchBox = (props) => {
  return (
    <input
      type="search"
      className="search"
      placeholder={props.placeholder}
      onChange={props.onChange}
    />
  );
};
export default SearchBox;
