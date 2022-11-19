import React from "react";
import Elements from "../components/Elements";
import Footer from "../components/Footer";
import "../components/style.css";
function Home() {
  return (
    <>
      <div className="hero">
        <div className="container hero-infos">
          <h1 className="hero-title">Kuzina</h1>
          <p className="hero-caption pt-5">Best restaurant in prishtina</p>
          <a
            href="../App.js"
            className="btn btn-light ps-5 pe-5 pt-3 pb-3 mt-5 rounded-0"
          >
            See menu
          </a>
        </div>
      </div>
      <Elements />
      <Footer/>
    </>
  );
}

export default Home;
