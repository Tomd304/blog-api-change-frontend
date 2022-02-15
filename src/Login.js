import stylesheet from "./index.css";
import React, { useState, useEffect } from "react";

const Login = (props) => {
  console.log(props);
  const [login, setLogin] = useState({ username: "", password: "" });

  const onChange = (e) => {
    setLogin({ ...login, [e.target.name]: e.target.value });
  };

  const onClick = async () => {
    const res = await fetch("http://localhost:3000/auth/login", {
      method: "post",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(login),
    });
    if (res.status !== 500) {
      const token = await res.json();
      props.setToken(token);
    }
  };

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
