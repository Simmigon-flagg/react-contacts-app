import React, { useRef } from "react";
import { Link } from "react-router-dom";
const AddContact = (props) => {
  const contactName = useRef();
  const contactEmail = useRef();

  const handelAddContact = (event) => {
    event.preventDefault();
    const name = contactName.current.value;
    const email = contactEmail.current.value;

    if (!name) alert("Please Fill in a name");
    if (!email) alert("Please Fill in a email");
    props.addAContact({ name, email });
    contactName.current.value = "";
    contactEmail.current.value = "";
    props.history.push("/react-contacts-app");
  };
  return (
    <div className="ui main">
      <h2>Add Contact</h2>
      <form onSubmit={handelAddContact} className="ui form">
        <div className="field">
          <label>Name</label>
          <input
            type="text"
            name="name"
            placeholder="name"
            ref={contactName}
            required
          />
        </div>
        <div className="field">
          <label>Email</label>
          <input
            type="email"
            name="email"
            placeholder="email@email.com"
            ref={contactEmail}
            required
          />
        </div>
        <button className="ui button blue">Submit</button>
        <Link to={"/react-contacts-app"}>
          <button className="ui button blue">Cancel</button>
        </Link>
      </form>
    </div>
  );
};

export default AddContact;
