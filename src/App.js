import ContactList from "./components/container/ContactList";
import GreetingStyled from "./components/pure/GreetingStyled";

import "../node_modules/bootstrap/dist/css/bootstrap.css";

import logo from "./logo.svg";
import "./App.css";

import Clock from "./components/pure/Clock";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <ContactList />
        <GreetingStyled name={"Marcos"} />
        <Clock />
      </header>
    </div>
  );
}

export default App;
