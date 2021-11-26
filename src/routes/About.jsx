import React from "react";

export default function About() {
  return (
    <>
      <h3>About</h3>
      <h4>Introduction</h4>
      <p>
        React Router is a fully-featured client and server-side routing library
        for React, a JavaScript library for building user interfaces. React
        Router runs anywhere React runs; on the web, on the server with node.js,
        and on React Native.
      </p>
      <p>
        If you're just getting started with React generally, we recommend you
        follow{" "}
        <a href="https://reactjs.org/docs/getting-started.html">
          the excellent Getting Started guide
        </a>{" "}
        in the official docs. There is plenty of information there to get you up
        and running. React Router is compatible with React &gt;= 16.8.
      </p>
      <p>
        We'll keep this tutorial quick and to the point. By the end you'll know
        the APIs you deal with day-to-day with React Router. After that, you can
        dig into some of the other docs to get a deeper understanding.
      </p>
      <ul>
        <li>Configuring Routes</li>
        <li>Navigating with Link</li>
        <li>Creating Links with active styling</li>
        <li>Using Nested Routes for Layout</li>
        <li>Navigating programmatically</li>
        <li>Using URL params for data loading</li>
        <li>Using URL Search params</li>
        <li>Creating your own behaviors through composition</li>
        <li>Server Rendering</li>
      </ul>
    </>
  );
}
