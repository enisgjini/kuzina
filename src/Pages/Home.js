import React from "react";
import Elements from "../components/Elements";
import Footer from "../components/Footer";
import "../components/style.css";
import { Link } from "react-router-dom";
function Home() {
  return (
    <>
    <br />
      <div className="hero">
        <div className="container hero-infos mx-auto">
          <h1 className="heroTitle  text-wrap">Kuzina</h1>
          <p className="hero-caption pt-5">Best restaurant in Prishtina</p>
          <Link
            to="/Menu"
            className="btn btn-light ps-5 pe-5 pt-3 pb-3 mt-5 rounded-0"
          >
            See menu
          </Link>
        </div>
      </div>{" "}
      <Elements />
      <Footer />
    </>
  );
}

export default Home;
