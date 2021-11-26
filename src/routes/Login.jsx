import React from "react";
import { Link } from "react-router-dom";

export default function Login({ changeAuth }) {
  return (
    <div>
      <h3>Login</h3>
      <p>
        You are in <b>Login</b> route.
      </p>
      <p>
        You need to pass the authentication, please click "Login" to see the{" "}
        <Link style={{ paddingRight: 0 }} to="/dashboard">
          Dashboard
        </Link>
        .
      </p>
      <button onClick={changeAuth}>
        <Link style={{ textDecoration: "none" }} to="/dashboard">
          "Login"
        </Link>
      </button>
      <button>
        <Link style={{ textDecoration: "none" }} to="/">
          Go Home
        </Link>
      </button>
    </div>
  );
}
