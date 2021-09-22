import React from "react";

const EditContact = (props) => {
  const { contact } = props.location.state;
  const handelUpdateContact = (event) => {
    const { name, email } = event.target;
    const update = {
      id: contact.id,
      name: name.value,
      email: email.value,
    };

    if (!update.name) alert("Please Fill in a name");
    if (!update.email) alert("Please Fill in a name");
    props.updateContact(update);
    props.history.push("/react-contacts-app");
  };
  return (
    <div className="ui main">
      <h2>Edit Contact</h2>
      <form onSubmit={handelUpdateContact} className="ui form">
        <div className="field">
          <label>Name</label>
          <input
            type="text"
            name="name"
            placeholder="name"
            defaultValue={contact.name}
            required
          />
        </div>
        <div className="field">
          <label>Email</label>
          <input
            type="email"
            name="email"
            placeholder="email@email.com"
            defaultValue={contact.email}
            required
          />
        </div>
        <button className="ui button blue">Edit</button>
      </form>
    </div>
  );
};

export default EditContact;
