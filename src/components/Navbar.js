/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import "./style.css";
import logo from "../assets/logo-of-site.png";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import Home from "../Pages/Home";
import Menu from "../Pages/Menu";
import Profile from "../Pages/Profile";
import ErrorPage from "../Pages/ErrorPage";

function Navbar() {
  return (
    <>
      <Router>
        <nav className="navbar navbar-expand navbar-dark fixed-top" style={{ backgroundColor: "black" }}>
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
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav mx-auto">
                <li className="nav-item">
                  <Link to="/" className="nav-link" aria-current="page">
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/Menu" className="nav-link">
                    Menu
                  </Link>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    About Us
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
                <button
                  className="btn btn-outline-dark text-white"
                  type="submit"
                >
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
          {/* <Link to="/"> Home </Link>
          <Link to="/about"> About </Link>
          <Link to="/profile"> Profile </Link> */}
        </nav>
        <br />
        <br />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Menu" element={<Menu />} />
          <Route path="/profile/:username" element={<Profile />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </Router>
      
    </>
  );
}

export default Navbar;
