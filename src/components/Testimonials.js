import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "./style.css"

function Testimonials() {
  return (
    <div>
      <div class="row" id="our-client">
        <div class="col-md-8">
          <h1 className="title">Our client say</h1>
        </div>
        <div class="col-6 col-md-4 text-end">
          <a className="sas">Read more →</a>
        </div>
      </div>
      <div class="row text-start mx-auto gap-1" id="user">
        <Swiper
          spaceBetween={50}
          slidesPerView={3}
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log(swiper)}
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
            <div class="w-100 border border-2 border-dark ">
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
