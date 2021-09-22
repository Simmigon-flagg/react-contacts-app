import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const ContactCard = ({ contact, deleteContactByIdFromContactsList }) => {
  const { id, name, email } = contact;
  const [img, setImg] = useState("");
  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(
        `https://jsonplaceholder.typicode.com/photos/${id}`
      );
      setImg(result.data);
    };

    fetchData();
  }, [id]);

  return (
    <div key={id} class="item">
      <img class="ui avatar image" src={img.url} alt={"Dexter"} />
      <div class="content">
        <Link to={{ pathname: `/users/${id}`, state: { contact } }}>
          <div class="header">{name}</div>
          <div>{email}</div>
        </Link>
      </div>
      <span class="ui right aligned container">
        <Link to={{ pathname: `/react-contacts-app/edit`, state: { contact } }}>
          <i
            className="edit alternate outline icon large"
            style={{ color: "grey" }}
          ></i>
        </Link>

        <i
          className="trash alternate outline icon large"
          style={{ color: "red" }}
          onClick={() => deleteContactByIdFromContactsList(id)}
        ></i>
      </span>
    </div>
  );
};

export default ContactCard;
