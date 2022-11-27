/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import "./style.css";
import logo from "../assets/logo-of-site.png";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import Home from "../Pages/Home";
import Menu from "../Pages/Menu";
import About from "../Pages/About";
import Contacts from "../Pages/Contacts";
import ErrorPage from "../Pages/ErrorPage";

function Navbar1() {
  return (
    <Router>
      <nav
        class="navbar navbar-expand-lg navbar-dark fixed-top"
        style={{ backgroundColor: "black" }}
      >
        <div class="container">
          <Link to="/" aria-current="page" className="navbar-brand">
            <img src={logo} alt="" className="logo" />
          </Link>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav mx-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <Link to="/" className="nav-link" aria-current="page">
                  Home
                </Link>
              </li>
              <li class="nav-item">
                <Link to="/Menu" className="nav-link">
                  Menu
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/About-us" className="nav-link">
                  About Us
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/Contacts" className="nav-link">
                  Contacts
                </Link>
              </li>
            </ul>
            <div className="d-flex" role="search">
              <button className="btn btn-outline-dark text-white" type="submit">
                <i class="fi fi-rr-phone-call"></i>
                <a
                  href="tel:8665562570"
                  className="text-decoration-none text-white "
                >
                  +383 (0) 49 494 494
                </a>
              </button>
            </div>
          </div>
        </div>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Menu" element={<Menu />} />
        <Route path="/About-us" element={<About />} />
        <Route path="/Contacts" element={<Contacts />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </Router>
  );
}

export default Navbar1;
