import React, { useEffect, useState } from "react";
import { connection_status } from "../../models/connection_status.enum";
import { Contact } from "../../models/contact.class";
import ContactItem from "../pure/Contact";

const defaultContact = new Contact(
  "Marcos",
  "Esqueda",
  "bymarcant@gmail.com",
  connection_status.CONNECTED
);
const ContactList = () => {
  const [contact, setContact] = useState(defaultContact);

  useEffect(() => {
    console.log("Contact state has been modified");

    return () => {
      console.log("this component is going to be unmounted");
    };
  }, [contact]);

  return (
    <div>
      <ContactItem contact={contact} />
    </div>
  );
};

export default ContactList;
