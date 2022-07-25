import React, { useEffect, useState } from "react";
import { connection_status } from "../../models/connection_status.enum";
import { Contact } from "../../models/contact.class";
import ContactItem from "../pure/Contact";
import ContactForm from "../pure/forms/ContactForm";

const defaultContact1 = new Contact(
  "Marcos",
  "Esqueda",
  "bymarcant@gmail.com",
  connection_status.CONNECTED
);
const defaultContact2 = new Contact(
  "Antonio",
  "Barrios",
  "blackiron662@gmail.com",
  connection_status.DISCONNECTED
);
const defaultContact3 = new Contact(
  "Other",
  "Other lastname",
  "other@gmail.com",
  connection_status.DISCONNECTED
);

const ContactList = () => {
  const [contacts, setContacts] = useState([
    defaultContact1,
    defaultContact2,
    defaultContact3,
  ]);

  useEffect(() => {
    console.log("Contact state has been modified");

    return () => {
      console.log("this component is going to be unmounted");
    };
  }, [contacts]);

  const changeStatus = (contact) => {
    const index = contacts.indexOf(contact);
    const contactList = [...contacts];
    contactList[index].status = !contactList[index].status;
    setContacts(contactList);
  };

  const removeContact = (contact) => {
    // const index = contacts.indexOf(contact);
    const contactList = [...contacts];

    setContacts(
      contactList.filter((contactListed) => contactListed.name !== contact.name)
    );
  };

  const addContact = (contact) => {
    const tempContacts = [...contacts, contact];
    setContacts(tempContacts);
  };

  return (
    <div>
      <div className="col-12 text-dark">
        <div className="card">
          <div className="card-header p-3">
            <h5>Your Contacts: </h5>
          </div>
          <div
            className="card-body"
            data-mdb-perfect-scrollbar={true}
            style={{ position: "relative", height: "400px" }}
          >
            <table>
              <thead>
                <tr>
                  <th scope="col">Name</th>
                  <th scope="col">Lastname</th>
                  <th scope="col">Email</th>
                  <th scope="col">Status</th>
                  <th scope="col">Actions</th>
                </tr>
              </thead>
              <tbody>
                {contacts.map((contact, idx) => (
                  <ContactItem
                    key={idx}
                    contact={contact}
                    changeStatus={changeStatus}
                    removeContact={removeContact}
                  />
                ))}
              </tbody>
            </table>
          </div>
          <div className="card-footer">
            <ContactForm add={addContact} />
          </div>
        </div>
      </div>
      {/* <ContactItem contact={contact} /> */}
    </div>
  );
};

export default ContactList;
