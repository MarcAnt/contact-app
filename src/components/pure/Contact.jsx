import React from "react";
import PropTypes from "prop-types";
import { Contact } from "../../models/contact.class";

const ContactItem = ({ contact }) => {
  return (
    <div>
      <h2>Name: {contact.name}</h2>
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
