import stylesheet from "./index.css";
import React, { useState, useEffect } from "react";

const Login = () => {
  const [login, setLogin] = useState({ username: "", password: "" });

  const onChange = (e) => {
    setLogin({ ...login, [e.target.name]: e.target.value });
  };

  const onClick = () => {};

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        marginTop: 50,
      }}
    >
      <form className="create-form">
        <div className="label-group">
          <input
            type="text"
            value={login.username}
            onChange={onChange}
            name="username"
            placeholder="username..."
          />
        </div>
        <div className="label-group">
          <input
            type="text"
            value={login.password}
            onChange={onChange}
            name="password"
            placeholder="password..."
          />
        </div>
        <button type="button" onClick={onClick} style={{ marginLeft: "auto" }}>
          Submit
        </button>
      </form>
    </div>
  );
};

export default Login;
