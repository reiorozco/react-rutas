import React from "react";
import { Link } from "react-router-dom";

export default function Dashboard({ changeAuth }) {
  return (
    <div>
      <h3>Dashboard</h3>
      <p>
        You are in <b>Dashboard</b> route.
      </p>
      <p>Authentication was true, you are on a private route.</p>
      <button onClick={changeAuth}>
        <Link style={{ textDecoration: "none" }} to="/">
          Go Home
        </Link>
      </button>
    </div>
  );
}
