import ContactCard from "./ContactCard";
import { Link } from "react-router-dom";
const ContactsList = ({ contacts, deleteFromContactById }) => {
  const allcontacts = contacts.map((contact) => {
    return (
      <ContactCard
        key={contact.id}
        contact={contact}
        deleteContactByIdFromContactsList={deleteFromContactById}
      />
    );
  });
  return (
    <div className="main">
      <h2>Contact List</h2>
      <Link to={"/react-contacts-app/add"}>
        <button className="ui button blue">Add Contact</button>
      </Link>
      <div className="ui celled list">{allcontacts}</div>
    </div>
  );
};

export default ContactsList;
