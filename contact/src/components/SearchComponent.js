import React, { useRef } from "react";
import "../styles/searchComponent.css";

function SearchComponent({ submit }) {
  let nameRef = useRef("");

  return (
    <div className="search">
      <input
        onChange={(e) => {
          nameRef.current = e.target.value;
          submit(nameRef.current);
        }}
        type="text"
        id="name"
        placeholder="Search"
      />
    </div>
  );
}

export default SearchComponent;
