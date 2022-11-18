/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import "./style.css";
import logo from "../assets/logo-of-site.png";

function Navbar() {
  return (
    <nav className="navbar fixed-top navbar-expand-lg navbar-dark ">
      <div className="container">
        <img src={logo} alt="" className="navbar-brand" />

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mx-auto">
            <li className="nav-item">
              <a className="nav-link" aria-current="page" href="#">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Menu
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                About us
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Events
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Contacts
              </a>
            </li>
          </ul>
          <div className="d-flex" role="search" id="call">
            <button className="btn btn-outline-dark text-white" type="submit">
              <i class="fi fi-rr-phone-call"></i>{" "}
              <a
                href="tel:8665562570"
                className="text-decoration-none text-white "
              >
                {" "}
                +383 (0) 49 494 494
              </a>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
