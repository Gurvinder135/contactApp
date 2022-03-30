import React from "react";
import "../styles/sort.css";

function Sort({ sort }) {
  return (
    <div className="sort">
      Sort By
      <form
        onChange={(e) => {
          sort(e.target.value);
        }}
        className="sortform"
      >
        <input type="radio" id="fname" name="name" defaultValue="firstname" />
        <label htmlFor="fname"> First Name</label>
        <br />
        <input type="radio" id="lname" name="name" defaultValue="lastname" />
        <label htmlFor="lname">Last Name</label>
        <br />
      </form>
    </div>
  );
}

export default Sort;
