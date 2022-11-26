import React, { useState } from "react";
import Footer from "../components/Footer";
import Breadcrumb from "../components/Breadcrumb";

import { send } from "emailjs-com";

import "../Pages/pages.css";

function Contacts() {
  const [toSend, setToSend] = useState({
    from_name: "",
    to_name: "",
    message: "",
    reply_to: "",
  });

  const onSubmit = (e) => {
    e.preventDefault();
    send("service_7j4cnks", "template_c0r7abt", toSend, "cjocNgsDu2rZ7SdXI")
      .then((response) => {
        console.log("SUCCESS!", response.status, response.text);
      })
      .catch((err) => {
        console.log("FAILED...", err);
      });
  };

  const handleChange = (e) => {
    setToSend({ ...toSend, [e.target.name]: e.target.value });
  };
  return (
    <>
      <div className="container mt-5">
        <Breadcrumb />
        <div className="row gx-5" id="menuSection">
          <div className=" col-md-6 col-xs-12">
            <h1 id="menuTitle">Contacts</h1>
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
        <div class="row mx-auto text-center">
          <div class="col-xs-4 col-md-4 col-sm-4 bootCols ">
            <i class="fi fi-rr-marker"></i>
            <p>Prishtine </p>
            <p> Rruga Muharrem Fejza (Lagjja Spitalit)</p>
          </div>
          <div class="col-xs-4 col-md-4 col-sm-4 bootCols">
            <i class="fi fi-rr-phone-call"></i>
            <p>+383 (0) 49 494 494</p>
          </div>
          <div class="col-xs-4 col-md-4 col-sm-4 bootCols">
            <i class="fi fi-rr-envelope"></i>
            <p>kuzinatradition@gmail.com</p>
          </div>
        </div>
        <div className="row mt-5">
          <div className=" col-md-12 col-xs-12">
            <h1 id="menuTitle">Location</h1>
          </div>
          <br />
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d366.844979713591!2d21.1698449911472!3d42.645251078716456!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x13549f03ed06b62f%3A0x9ac38a42cf5a0ca7!2sKuzina!5e0!3m2!1sen!2s!4v1669217531876!5m2!1sen!2s"
            className="w-full mb-5"
            height={500}
          />
        </div>
        {/*  Footer */}
        <form onSubmit={onSubmit}>
          <div className="row">
            <div className="col-md-6 col-xs-12" id="name">
              {" "}
              <input
                type="text"
                name="from_name"
                placeholder="Enter your name"
                value={toSend.from_name}
                onChange={handleChange}
              />
              {/* <input
            type="text"
            name="to_name"
            placeholder="to name"
            value={toSend.to_name}
            onChange={handleChange}
          /> */}
            </div>
            <div className=" col-md-6 col-xs-12" id="email">
              <input
                type="text"
                name="reply_to"
                placeholder="Enter your email"
                value={toSend.reply_to}
                onChange={handleChange}
              />
            </div>
          </div>
          <br />
          <div className="row">
            <div className="col-md-12" id="messageForUs">
              <textarea
                type="text"
                name="message"
                placeholder="Your message"
                value={toSend.message}
                onChange={handleChange}
                class="form-control border-0 outline-0"
              />
            </div>
          </div>
          <br />
          <button type="submit" className="submit">
            Submit
          </button>
        </form>
      </div>
      <br />
      <Footer />
    </>
  );
}

export default Contacts;
