import React from "react";
import "../styles/eachContact.css";
import axios from "axios";

function EachContact({ data, fetchData, editForm }) {
  // function to handle delete feature
  const deleteContact = async (phonenumber) => {
    await axios.delete("http://localhost:4000/" + phonenumber);
    fetchData();
  };
  return (
    <li className="listCont">
      <div className="image">
        <img src={data.image} alt="new" />
      </div>
      <div className="name">{data.firstname + " " + data.lastname}</div>
      <div className="text">{data.phonenumber}</div>
      <div className="text">{data.email}</div>
      <div
        onClick={() => {
          editForm(data);
        }}
        className="button"
      >
        Edit
      </div>
      <div
        className="button"
        style={{ backgroundColor: "tomato" }}
        onClick={() => {
          deleteContact(data.phonenumber);
        }}
      >
        Delete
      </div>
    </li>
  );
}

export default EachContact;
