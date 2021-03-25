import React from "react";

import { Link } from "react-router-dom";
import "./style.css";

const Navbar = (props) => {


  return (
    <nav className="navbar navbar-expand-lg navbar-collapse-md navbar-collapse-sm navbar-dark bg-dark Navbar">
      <Link id="routerLink" to="/">
        <span
          className="navbar-brand mb-1"
          id="Span"
        >
          Seth Zygarlicke
        </span>
      </Link>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="nav navbar-nav navbar-right ms-auto">
          <li className="nav-item">
            <Link className="nav-link" id="navLink" to="/contact">
              Contact
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" id="navLink" to="/folio">
              Portfolio
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" id="navLink" to="/">
              About
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
