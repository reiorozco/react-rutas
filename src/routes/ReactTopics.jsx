import React from "react";
import { Link, Routes, Route, useParams } from "react-router-dom";

export default function ReactTopics() {
  return (
    <div>
      <h3>Choose a React topic</h3>
      <ul>
        <li>
          <Link to="jSX">JSX</Link>
        </li>
        <li>
          <Link to="state">State</Link>
        </li>
        <li>
          <Link to="hooks">Hooks</Link>
        </li>
        <li>
          <Link to="components">Components</Link>
        </li>
      </ul>

      <Routes>
        <Route path=":topic" element={<Topic />} />
      </Routes>
    </div>
  );
}

function Topic() {
  let { topic } = useParams();

  return (
    <div>
      <h3>{topic.charAt(0).toUpperCase() + topic.slice(1)}</h3>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos
        repellat voluptates dolorem repudiandae, incidunt cumque sit amet
        mollitia aspernatur voluptatum libero! Corporis magni commodi autem
        laboriosam, ex velit ipsa dolor?
      </p>
    </div>
  );
}
