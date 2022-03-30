import React, { useEffect, useState, useRef } from "react";
import axios from "axios";
import EachContact from "./EachContact";
import "../styles/contact.css";
import ContactForm from "./ContactForm";
import EditContact from "./EditContact";
import SearchComponent from "./SearchComponent";
import Sort from "./Sort";

function Contact() {
  // React hooks
  const [contactList, setContactList] = useState([]);
  const [hideForm, setHideForm] = useState(0);
  const formRef = useRef();
  const valueRef = useRef();

  const fetchData = () => {
    axios.get("http://localhost:4000/").then((data) => {
      valueRef.current = data.data;
      setContactList(data.data);
    });
  };

  useEffect(() => {
    fetchData();
  }, []);

  // function to handle search feature
  const submitSearch = (value) => {
    value = value.toLowerCase();
    let tempList = [];
    valueRef.current.forEach((post) => {
      let query =
        post.firstname +
        " " +
        post.lastname +
        " " +
        post.phonenumber +
        " " +
        post.email;
      query = query.toLowerCase();
      const indexName = query.indexOf(value);

      if (indexName !== -1) {
        tempList.push(post);
      }
    });
    setContactList(tempList);
  };

  // function to handle sort feature
  const sort = (value) => {
    console.log(value);
    valueRef.current.sort(function (a, b) {
      if (value === "firstname") {
        a = a.firstname.toLowerCase();
        b = b.firstname.toLowerCase();
      } else {
        a = a.lastname.toLowerCase();
        b = b.lastname.toLowerCase();
      }

      return a === b ? 0 : a > b ? 1 : -1;
    });
    setContactList([...valueRef.current]);
  };

  // function s to close the popups
  const closeForm = (value = null) => {
    if (value === "updated") {
      fetchData();
    }
    formRef.current = "";
    setHideForm(0);
  };

  const editForm = (value) => {
    formRef.current = value;
    setHideForm(2);
  };

  return (
    <>
      <div
        className="contact"
        style={hideForm === 0 ? { display: "block" } : { display: "none" }}
      >
        <div className="title"> Contacts</div>

        <hr />
        <SearchComponent submit={submitSearch} />
        <Sort sort={sort} />
        {contactList.length === 0 && (
          <div className="noContent">No contact to show!!! </div>
        )}
        <ul>
          {contactList.map((list) => {
            return (
              <React.Fragment key={list.phonenumber}>
                <EachContact
                  fetchData={fetchData}
                  data={list}
                  editForm={editForm}
                />
                <hr />
              </React.Fragment>
            );
          })}
        </ul>
        <div
          className="addButton"
          onClick={() => {
            setHideForm(1);
          }}
        >
          Add Contact
        </div>
      </div>
      <div style={hideForm === 1 ? { display: "block" } : { display: "none" }}>
        <ContactForm closeForm={closeForm} />
      </div>
      {formRef.current && (
        <div
          style={hideForm === 2 ? { display: "block" } : { display: "none" }}
        >
          <EditContact closeForm={closeForm} data={formRef.current} />
        </div>
      )}
    </>
  );
}

export default Contact;
