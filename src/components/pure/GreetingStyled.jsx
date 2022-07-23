import React, { useState } from "react";

/**
 * @typedef Props
 * @param {Props} props
 */

const loggedStyle = {
  color: "#90EE90",
};

const unloggedStyle = {
  color: "tomato",
  fontWeight: "bold",
};

const GreetingStyled = (props) => {
  const [logged, setLogged] = useState(false);

  return (
    <div style={logged ? loggedStyle : unloggedStyle} className={"mt-3"}>
      <h3>{logged ? props.name : "Please Login"}</h3>
      <button
        onClick={() => {
          setLogged(!logged);
        }}
        className={"btn btn-success"}
      >
        {logged ? "Logout" : "Login"}
      </button>
    </div>
  );
};

export default GreetingStyled;
