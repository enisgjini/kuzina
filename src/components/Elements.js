/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/anchor-has-content */
import React from "react";
import "./style.css";
import RestaurantWallpaper from "../assets/1.webp";
import RestaurantWallpaper2 from "../assets/2.webp";
import RestaurantWallpaper3 from "../assets/3.webp";

function Elements() {
  return (
    <div className="container">
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
          <a href="" className="read-more-button">
            Read more
          </a>
        </div>
      </div>
      <div className="row gx-5" id="menu">
        <div className=" col-md-6 col-xs-12" id="menu-description">
          <h1 className="restaurant-title">Menu</h1>
          <br />
          <p className="restaurant-subtitle">
            Cras tincidunt lobortis feugiat vivamus at augue eget arcu dictum
            varius duis at consectetur lorem donec massa sapien faucibus et
            molestie ac feugiat sed lectus vestibulum mattis ullamcorper.
          </p>
          <br />
          <a href="" className="read-more-button">
            Go to menu
          </a>
        </div>
        <div className="col-md-6 col-xs-12 " id="menu-image">
          <img
            src={RestaurantWallpaper2}
            alt="Enis"
            className="img-fluid  mx-auto d-block "
          />
        </div>
      </div>
      <div className="row gx-5" id="about-us">
        <div className="col-md-6 col-xs-12 " id="menu-image">
          <img
            src={RestaurantWallpaper3}
            alt="Enis"
            className="img-fluid  mx-auto d-block "
          />
        </div>
        <div className=" col-md-6 col-xs-12" id="menu-description">
          <h1 className="restaurant-title">About us</h1>
          <br />
          <p className="restaurant-subtitle">
            Cras tincidunt lobortis feugiat vivamus at augue eget arcu dictum
            varius duis at consectetur lorem donec massa sapien faucibus et
            molestie ac feugiat sed lectus vestibulum mattis ullamcorper.
          </p>
          <br />
          <a href="" className="read-more-button">
            Read more
          </a>
        </div>
      </div>
      {/* <!-- Stack the columns on mobile by making one full-width and the other half-width --> */}
      <div class="row" id="our-client">
        <div class="col-md-8">
          <h1 className="title">Our client say</h1>
        </div>
        <div class="col-6 col-md-4 text-end">
          <a className="sas">Read more →</a>
        </div>
      </div>
      <div class="row text-start" id="user">
        <div class="col-xs-12 col-md-4 col-lg-4 border border-2 border-dark">
          <h1>Anita</h1>
          <h6>25.08.2022</h6>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
        </div>
        <div class="col-xs-12 col-md-4 col-lg-4 border border-2 border-dark">
          <h1>Anita</h1>
          <h6>25.08.2022</h6>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
        </div>
        <div class="col-xs-12 col-md-4 col-lg-4 border border-2 border-dark">
          <h1>Anita</h1>
          <h6>25.08.2022</h6>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
        </div>
      </div>
      <br />
    </div>
  );
}

export default Elements;
