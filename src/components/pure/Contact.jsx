import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { Contact } from "../../models/contact.class";

import "../../styles/contact.scss";
import { connection_status } from "../../models/connection_status.enum";

const ContactItem = ({ contact, changeStatus, removeContact }) => {
  useEffect(() => {
    console.log("Created Contact");
    return () => {
      console.log(`The contact ${contact.name} is going to unmount`);
    };
  }, [contact]);

  function contacStatusBadge() {
    switch (contact.status) {
      case connection_status.CONNECTED:
        return (
          <h6 className="mb-0">
            <span className="badge bg-primary">Connected</span>
          </h6>
        );
      case connection_status.DISCONNECTED:
        return (
          <h6 className="mb-0">
            <span className="badge bg-warning">Disconnected</span>
          </h6>
        );

      default:
        break;
    }
  }

  return (
    <tr className="fw-normal">
      <td>
        <span className="ms-2">{contact.name}</span>
      </td>
      <td className="align-middle">
        <span className="align-middle">{contact.lastname}</span>
      </td>
      <td className="align-middle">
        <span>{contact.email}</span>
      </td>
      <td className="align-middle">{contacStatusBadge()}</td>
      <td className="align-middle">
        {contact.status ? (
          <i
            className="bi-toggle-on"
            style={{ color: "green" }}
            onClick={() => changeStatus(contact)}
          ></i>
        ) : (
          <i
            onClick={() => changeStatus(contact)}
            className="bi-toggle-off"
            style={{ color: "gray" }}
          ></i>
        )}

        <i
          onClick={() => removeContact(contact)}
          className="bi-trash"
          style={{ color: "tomato" }}
        ></i>
      </td>
    </tr>
  );
};

ContactItem.propTypes = {
  contact: PropTypes.instanceOf(Contact).isRequired,
  changeStatus: PropTypes.func.isRequired,
  removeContact: PropTypes.func.isRequired,
};

export default ContactItem;
