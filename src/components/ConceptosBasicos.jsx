import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
  HashRouter,
  Link,
} from "react-router-dom";
import Home from "../routes/Home";
import Contact from "../routes/Contact.";
import About from "../routes/About";
import Error404 from "../routes/Error404";
import MenuConceptos from "./MenuConceptos";
import User from "../routes/User";
import Products from "../routes/Products";
import ReactTopics from "../routes/ReactTopics";
import Login from "../routes/Login";
import Dashboard from "../routes/Dashboard";
import PrivateRoute from "./PrivateRoute";

export default function ConceptosBasicos() {
  const [auth, setAuth] = useState(null);

  function changeAuth() {
    if (!auth) {
      setAuth(true);
    } else {
      setAuth(null);
    }
  }
  console.log(`auth value is: ${auth}`);

  return (
    <div>
      <h2>Hash Router #</h2>
      <HashRouter>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<Error404 />} />
        </Routes>
      </HashRouter>
      <hr />
      <h2>Basic Concepts</h2>
      <Router>
        <Routes>
          {/* <MenuConceptos /> */}
          <Route path="/" element={<MenuConceptos />}>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="contact" element={<Contact />} />
            <Route path="user/:username" element={<User />} />
            <Route path="products" element={<Products />} />
            <Route path="acerca" element={<Navigate replace to="/about" />} />
            <Route
              path="contacto"
              element={<Navigate replace to="/contact" />}
            />
            <Route path="react/*" element={<ReactTopics />} />
            <Route path="login" element={<Login changeAuth={changeAuth} />} />
            <Route path="*" element={<Error404 />} />
          </Route>
          {/* Private route */}
          <Route path="/" element={<PrivateRoute auth={auth} />}>
            <Route
              path="dashboard"
              element={<Dashboard changeAuth={changeAuth} />}
            />
          </Route>
        </Routes>
      </Router>
    </div>
  );
}
