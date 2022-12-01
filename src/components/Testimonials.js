import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper";
import { Link } from "react-router-dom";

function Testimonials() {
  return (
    <div className="container">
      <div class="row mx-auto homeSections">
        <div class="col-md-8">
          <h1 className="titleOfSection">Our client say</h1>
        </div>
        <div class="col-6 col-md-4">
          <Link to="/About-us" className="linkToAboutUs">
            Read more →
          </Link>
        </div>
      </div>
      <div class="row text-start mx-auto gap-1" id="user">
        <Swiper
          slidesPerView={1}
          spaceBetween={10}
          pagination={{
            clickable: true,
          }}
          breakpoints={{
            640: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 3,
              spaceBetween: 40,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 50,
            },
          }}
          modules={[Pagination]}
          className="mySwiper"
        >
          <SwiperSlide>
            <div class="col-xs-12 col-md-4 col-lg-4 border border-2 border-dark slide w-auto">
              <h1>Anita</h1>
              <h6>25.08.2022</h6>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div class="w-100 border border-2 border-dark slide">
              <h1>Anita</h1>
              <h6>25.08.2022</h6>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div class="w-100 border border-2 border-dark slide">
              <h1>Anita</h1>
              <h6>25.08.2022</h6>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div class="w-100 border border-2 border-dark slide">
              <h1>Anita</h1>
              <h6>25.08.2022</h6>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </p>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
}

export default Testimonials;
