import React from "react";
import { connection_status } from "../../models/connection_status.enum";
import { Contact } from "../../models/contact.class";
import ContactItem from "../pure/Contact";

const ContactList = () => {
  const defaultContact = new Contact(
    "Marcos",
    "Esqueda",
    "bymarcant@gmail.com",
    connection_status.CONNECTED
  );

  return (
    <div>
      <ContactItem contact={defaultContact} />
    </div>
  );
};

export default ContactList;
