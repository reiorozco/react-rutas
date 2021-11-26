import React from "react";
import { Link, NavLink, Outlet } from "react-router-dom";

export default function MenuConceptos() {
  return (
    <div>
      <ol>
        <li>
          <span>HTML Links (not recommended): </span>
          <a href="/">Home</a>
          <a href="/about">About</a>
          <a href="/contact">Contact</a>
          <a href="/no-exist">Error 404</a>
        </li>
        <li>
          <span>Link component: </span>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
          <Link to="/no-exist">Error 404</Link>
        </li>
        <li>
          <span>NavLink component: </span>
          <NavLink
            to="/"
            className={({ isActive }) =>
              "nav-link" + (isActive ? " activated" : "")
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              "nav-link" + (isActive ? " activated" : "")
            }
          >
            About
          </NavLink>
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              "nav-link" + (isActive ? " activated" : "")
            }
          >
            Contact
          </NavLink>
          <NavLink
            to="/no-exist"
            className={({ isActive }) =>
              "nav-link" + (isActive ? " activated" : "")
            }
          >
            Error 404
          </NavLink>
        </li>
        <li>
          Parameters:
          <ul>
            <li>
              <NavLink
                to="/user/reiorozco"
                className={({ isActive }) =>
                  "nav-link" + (isActive ? " activated" : "")
                }
              >
                Rei Orozco
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/user/cocodriloki"
                className={({ isActive }) =>
                  "nav-link" + (isActive ? " activated" : "")
                }
              >
                Loki
              </NavLink>
            </li>
          </ul>
        </li>
        <li>
          <span>Query parameters: </span>
          <NavLink
            to="/products"
            className={({ isActive }) =>
              "nav-link" + (isActive ? " activated" : "")
            }
          >
            Products
          </NavLink>
        </li>
        <li>
          <span>Redirections: </span>
          <Link to="/acerca">Acerca</Link>
          <Link to="/contacto">Contacto</Link>
        </li>
        <li>
          <span>Nested routes: </span>
          <NavLink
            to="/react"
            className={({ isActive }) =>
              "nav-link" + (isActive ? " activated" : "")
            }
          >
            React topics
          </NavLink>
        </li>
        <li>
          <span>Private routes: </span>
          {/* <Link to="/login">Login</Link> */}
          <Link to="/dashboard">Dashboard</Link>
        </li>
      </ol>
      <Outlet />
    </div>
  );
}
