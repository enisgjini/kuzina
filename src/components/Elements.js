/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/anchor-has-content */
import React from "react";

import RestaurantWallpaper from "../assets/1.webp";
import RestaurantWallpaper2 from "../assets/2.webp";
import RestaurantWallpaper3 from "../assets/3.webp";
import Testimonials from "./Testimonials";
import { Link } from "react-router-dom";

function Elements() {
  return (
    <div className="container">
      <div className="row gx-5 mx-auto homeSections">
        <div className="col-md-6 col-xs-12 " id="restaurant-image">
          <img
            src={RestaurantWallpaper}
            alt="Restaurant"
            className="img-fluid imageOfSection"
          />
        </div>
        <div className=" col-md-6 col-xs-12 mb-5 ">
          <h1 className="titleOfSection">Restaurant</h1>
          <br />
          <p className="paragraphOfSection">
            Cras tincidunt lobortis feugiat vivamus at augue eget arcu dictum
            varius duis at consectetur lorem donec massa sapien faucibus et
            molestie ac feugiat sed lectus vestibulum mattis ullamcorper.
          </p>
          <br />
          <Link to="/About-us" className="readMoreButton">
            Read more
          </Link>
        </div>
      </div>
      <div className="row gx-5 mx-auto homeSections">
        <div className=" col-md-6 col-xs-12 mb-5">
          <h1 className="titleOfSection">Menu</h1>
          <br />
          <p className="paragraphOfSection">
            Cras tincidunt lobortis feugiat vivamus at augue eget arcu dictum
            varius duis at consectetur lorem donec massa sapien faucibus et
            molestie ac feugiat sed lectus vestibulum mattis ullamcorper.
          </p>
          <br />
          <Link to="/Menu" className="readMoreButton">
            Go to menu
          </Link>
        </div>
        <div className="col-md-6 col-xs-12 ">
          <img
            src={RestaurantWallpaper2}
            alt="Enis"
            className="img-fluid imageOfSection"
          />
        </div>
      </div>
      <div className="row gx-5 mx-auto homeSections">
        <div className="col-md-6 col-xs-12 ">
          <img
            src={RestaurantWallpaper3}
            alt="Enis"
            className="img-fluid imageOfSection"
          />
        </div>
        <div className=" col-md-6 col-xs-12 mb-5" id="menu-description">
          <h1 className="titleOfSection">About us</h1>
          <br />
          <p className="paragraphOfSection">
            Cras tincidunt lobortis feugiat vivamus at augue eget arcu dictum
            varius duis at consectetur lorem donec massa sapien faucibus et
            molestie ac feugiat sed lectus vestibulum mattis ullamcorper.
          </p>
          <br />
          <Link to="/About-us" className="readMoreButton">
            Read more
          </Link>
        </div>
      </div>
      {/* <!-- Stack the columns on mobile by making one full-width and the other half-width --> */}
      <Testimonials />
      <br />
    </div>
  );
}

export default Elements;
