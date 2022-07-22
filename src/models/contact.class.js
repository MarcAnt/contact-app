import { connection_status } from "./connection_status.enum";

export class Contact {
  name = "";
  lastname = "";
  email = "";
  status = connection_status.CONNECTED;

  constructor(name, lastname, email, status) {
    this.name = name;
    this.lastname = lastname;
    this.email = email;
    this.status = status;
  }
}
