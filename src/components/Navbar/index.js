import React from "react";

import "./style.css"

const Navbar = (props) => {
  return (
    <nav className="navbar navbar-expand-lg navbar-collapse-md navbar-collapse-sm navbar-dark bg-dark Navbar">
      <span style={{color: "violet"}}className="navbar-brand mb-1 Span">
        Seth Zygarlicke
      </span>

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
            <a className="nav-link" style={{color: "violet"}} href="/contact">
              Contact
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" style={{color: "violet"}} href="/folio">
              Portfolio
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" style={{color: "violet"}} href="/">
              About
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
