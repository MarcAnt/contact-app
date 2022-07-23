import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { Contact } from "../../models/contact.class";

import "../../styles/contact.scss";

const ContactItem = ({ contact }) => {
  useEffect(() => {
    console.log("Created Contact");
    return () => {
      console.log(`The contact ${contact.name} is going to unmount`);
    };
  }, [contact]);

  return (
    <div>
      <h2 className="contact-name">Name: {contact.name}</h2>
      <h3>Lastname: {contact.lastname}</h3>
      <h4>Email: {contact.email}</h4>
      <h5>Status: {contact.status ? "Connected" : "Disconnected"}</h5>
    </div>
  );
};

ContactItem.propTypes = {
  contact: PropTypes.instanceOf(Contact),
};

export default ContactItem;
