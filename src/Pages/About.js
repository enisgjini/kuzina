import React, { useState } from "react";
import "./pages.css";
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route,
//   Link,
//   useLocation,
// } from "react-router-dom";
import RestaurantWallpaper from "../assets/1.webp";
import RestaurantWallpaper2 from "../assets/2.webp";
import RestaurantWallpaper3 from "../assets/3.webp";
import Footer from "../components/Footer";
import Breadcrumb from "../components/Breadcrumb";
function About() {
  
  return (
    <>
      <div className="container mt-5">
        <Breadcrumb/>
        <div className="row gx-5" id="menuSection">
          <div className=" col-md-6 col-xs-12">
            <h1 id="menuTitle">About us</h1>
          </div>
          <div className="col-md-6 col-xs-12 ">
            <p id="menuDescription">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>
        </div>
        <div className="row gx-5" id="restaurant">
          <div className="col-md-6 col-xs-12 " id="restaurant-image">
            <img
              src={RestaurantWallpaper}
              alt="Enis"
              className="img-fluid  mx-auto d-block"
            />
          </div>
          <div className=" col-md-6 col-xs-12" id="restaurant-description">
            <h1 className="restaurant-title">Restaurant</h1>
            <br />
            <p className="restaurant-subtitle">
              Cras tincidunt lobortis feugiat vivamus at augue eget arcu dictum
              varius duis at consectetur lorem donec massa sapien faucibus et
              molestie ac feugiat sed lectus vestibulum mattis ullamcorper.
            </p>
            <br />
          </div>
        </div>
        <div className="row gx-5" id="restaurant">
          <div className=" col-md-6 col-xs-12" id="restaurant-description">
            <h1 className="restaurant-title">Staff</h1>
            <br />
            <p className="restaurant-subtitle">
              Cras tincidunt lobortis feugiat vivamus at augue eget arcu dictum
              varius duis at consectetur lorem donec massa sapien faucibus et
              molestie ac feugiat sed lectus vestibulum mattis ullamcorper.
            </p>
            <br />
          </div>
          <div className="col-md-6 col-xs-12 " id="restaurant-image">
            <img
              src={RestaurantWallpaper2}
              alt="Enis"
              className="img-fluid  mx-auto d-block"
            />
          </div>
        </div>
        <div className="row gx-5" id="restaurant">
          <div className="col-md-6 col-xs-12 " id="restaurant-image">
            <img
              src={RestaurantWallpaper3}
              alt="Enis"
              className="img-fluid  mx-auto d-block"
            />
          </div>
          <div className=" col-md-6 col-xs-12" id="restaurant-description">
            <h1 className="restaurant-title">Staff</h1>
            <br />
            <p className="restaurant-subtitle">
              Cras tincidunt lobortis feugiat vivamus at augue eget arcu dictum
              varius duis at consectetur lorem donec massa sapien faucibus et
              molestie ac feugiat sed lectus vestibulum mattis ullamcorper.
            </p>
            <br />
          </div>
        </div>
      </div><br />
      <Footer/>
    </>
  );
}

export default About;
