import ContactList from "./components/container/ContactList";
// import GreetingStyled from "./components/pure/GreetingStyled";
// import Clock from "./components/pure/Clock";

import "../node_modules/bootstrap/dist/css/bootstrap.css";
import "../node_modules/bootstrap-icons/font/bootstrap-icons.css";

import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <ContactList />
        {/* <GreetingStyled name={"Marcos"} /> */}
        {/* <Clock /> */}
      </header>
    </div>
  );
}

export default App;
