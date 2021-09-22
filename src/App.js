import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import Header from "./components/Header";
import AddContact from "./components/AddContact";
import ContactsList from "./components/ContactsList";
import ContactDetails from "./components/ContactDetail";
import api from "../src/api/contacts";
import EditContact from "./components/EditContact";
const App = () => {
  const [contacts, setContacts] = useState([]);
  useEffect(() => {
    const getAllContacts = async () => {
      const allContacts = await getContacts();
     
      if (allContacts) setContacts(allContacts);

    };
    getAllContacts();
  }, []);

  const getContacts = async () => {
    const response = await api.get("/users");
    setContacts(response.data);
  };
  const addAContact = async (contact) => {
    const request = {
      id: uuidv4(),
      ...contact,
    };
    const response = await api.post("/users", request);
    setContacts([...contacts, response.data]);
  };
  const updateContact = async (contact) => {
    const response = await api.put(`/users/${contact.id}`, contact);
    const { id } = response.data;
    const update = contacts.map((contact) => {
      return contact.id === id ? { ...response.data } : contact;
    });
    setContacts(update);
  };
  const deleteContactById = async (id) => {
    await api.delete(`/users/${id}`);
    const withRemovedContact = contacts.filter((contact) => contact.id !== id);
    setContacts(withRemovedContact);
  };

  return (
    <div>
      <Router>
        <Header />

        <div className="ui container">
          <Switch>
            <Route
              path="/add"
              render={(props) => (
                <AddContact {...props} addAContact={addAContact} />
              )}
            />
            <Route
              exact
              path="/"
              render={(props) => (
                <ContactsList
                  {...props}
                  contacts={contacts}
                  deleteFromContactById={deleteContactById}
                />
              )}
            ></Route>
            {/* <Route
              path="/edit"
              render={(props) => (
                <EditContact {...props} updateContact={updateContact} />
              )}
            ></Route> */}
            <Route
              exact
              path="/edit"
              render={(props) => (
                <EditContact {...props} updateContact={updateContact} />
              )}
            />

            <Route path="/users/:id" component={ContactDetails}></Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
};

export default App;
