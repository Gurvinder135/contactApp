import React, { useState } from "react";
import "../styles/contactForm.css";
import axios from "axios";

function EditContact({ closeForm, data }) {
  const [form, setForm] = useState(data);

  // function to handle submit form after editing
  const submitForm = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:4000/updatecontact" + data._id, form)
      .then((res) => {
        if (res.data.indexOf("email") !== -1) {
          alert("Email already exist");
        } else if (res.data.indexOf("phonenumber") !== -1) {
          alert("Phone number already exist");
        } else {
          closeForm("updated");
          setForm({
            firstname: "",
            lastname: "",
            email: "",
            phonenumber: "",
            image: "",
          });
        }
      });
  };
  return (
    <div className="form">
      Add new Contact
      <div onClick={closeForm} className="closeButton">
        X
      </div>
      <form onSubmit={submitForm}>
        <label htmlFor="fname">First name:</label>
        <input
          required
          type="text"
          id="fname"
          name="fname"
          value={form.firstname}
          placeholder="First Name"
          onChange={(e) => {
            setForm({ ...form, firstname: e.target.value });
          }}
        />

        <label htmlFor="lname">Last name:</label>
        <input
          required
          type="text"
          id="lname"
          value={form.lastname}
          name="lname"
          placeholder="Last Name"
          onChange={(e) => {
            setForm({ ...form, lastname: e.target.value });
          }}
        />

        <label htmlFor="email">Email:</label>
        <input
          required
          type="email"
          id="email"
          name="email"
          value={form.email}
          placeholder="Email"
          onChange={(e) => {
            setForm({ ...form, email: e.target.value });
          }}
        />

        <label htmlFor="phone">Phone Number:</label>
        <input
          required
          type="tel"
          id="phone"
          value={form.phonenumber}
          name="phone"
          placeholder="Enter phone number without space"
          pattern="[0-9]{10}"
          onChange={(e) => {
            setForm({ ...form, phonenumber: e.target.value });
          }}
        />
        <input type="submit" defaultValue="Submit" />
      </form>
    </div>
  );
}

export default EditContact;
