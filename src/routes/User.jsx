import React from "react";
import { useParams } from "react-router";

export default function User() {
  //   let params = useParams();
  //   console.log(params);

  let { username } = useParams();

  return (
    <div>
      <h3>User profile</h3>
      <p>
        User name: <b>{username}</b>
      </p>
    </div>
  );
}
