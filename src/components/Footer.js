import React from "react";
import "./style.css";
import FacebookIcon from "../assets/icons8-facebook.svg";
import InstagramIcon from "../assets/icons8-instagram.svg";

function Footer() {
  return (
    <footer
      class=" text-white text-center text-lg-start"
      style={{ backgroundColor: "black" }}
    >
      <div class="container p-4">
        <div class="row">
          <div class="col-lg-4 col-md-12 mb-md-0">
            <h6 class="text-uppercase phoneNumber">+386 43 711 211</h6>

            <h6 className="locationOfObject">
              Prishtine, Rruga Muharrem Fejza (Lagjja Spitalit)
            </h6>
            <h6 className="timeOfWorking">We work : 07:00 - 22:00</h6>
          </div>

          <div class="col-lg-4 col-md-6 mb-md-0 text-center CC">
            <h5 class="text-uppercase">Terms of privacy © 2022.</h5>
            <h5 class="text-uppercase">All rights reserved</h5>
          </div>

          <div class="col-lg-4 col-md-6 mb-md-0">
            <h5 class=" followUs">Follow us</h5>

            <ul class="list-unstyled list-group list-group-horizontal">
              <li>
                <a href="#!" class="text-white">
                  <img src={FacebookIcon} alt="" />
                </a>
              </li>
              <li>
                <a href="#!" class="text-white">
                  <img src={InstagramIcon} alt="" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
