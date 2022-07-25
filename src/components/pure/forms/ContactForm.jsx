import React, { useRef } from "react";
import PropTypes from "prop-types";
import { connection_status } from "../../../models/connection_status.enum";
import { Contact } from "../../../models/contact.class";

function ContactForm({ add }) {
  const nameRef = useRef(null);
  const lastNameRef = useRef(null);
  const emailRef = useRef(null);
  const statusRef = useRef(connection_status.DISCONNECTED);

  console.log(statusRef.current);

  const addContact = (e) => {
    e.preventDefault();

    const status =
      statusRef.current.value === "connected"
        ? connection_status.CONNECTED
        : connection_status.DISCONNECTED;

    const newContact = new Contact(
      nameRef.current.value,
      lastNameRef.current.value,
      emailRef.current.value,
      status
    );

    add(newContact);
  };

  return (
    <form
      onSubmit={addContact}
      className="d-flex justify-content-center align-items-center mb-4"
    >
      <div className="form-outline flex-fill">
        <input
          type="text"
          placeholder="Name"
          ref={nameRef}
          className="form-control form-control-lg "
          required
        />
        <input
          type="text"
          placeholder="Lastname"
          ref={lastNameRef}
          className="form-control form-control-lg "
          required
        />
        <input
          type="email"
          placeholder="Email"
          ref={emailRef}
          className="form-control form-control-lg "
          required
        />

        <select
          ref={statusRef}
          defaultValue={"connected"}
          className="form-select form-select-lg"
          aria-label="select contact"
          required
        >
          <option value={"connected"}>Connected</option>
          <option value={"disconnected"}>Disconnected</option>
        </select>
        <div className="d-grid gap-2">
          <button type="submit" className="btn btn-primary btn-large">
            Crear
          </button>
        </div>
      </div>
    </form>
  );
}

ContactForm.propTypes = {
  add: PropTypes.func.isRequired,
};

export default ContactForm;
