import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

const ContactDetails = (props) => {
  const { id,  name, email } = props.location.state.contact;
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
    <div className="main">
      <div className="ui card centered">
        <div className="image">
          <img
            src={img.url}
            alt={'Dexter'}
          />
        </div>
        <div className="content">
          <div className="header">{name}</div>
          <div className="description">{email}</div>
        </div>
      </div>
      <div className="center-div">
        <Link to={"/"}>
          <button className="ui button blue center">Back</button>
        </Link>
      </div>
    </div>
  );
};

export default ContactDetails;
