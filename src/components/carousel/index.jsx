import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "./index.scss";
import { avatarTest } from "../../assets";
import { Link } from "react-router-dom";

export default function Carousel() {
  return (
    <>
      <Swiper
        slidesPerView={6}
        spaceBetween={10}
        modules={[]}
        className="carouselMom"
      >
        <SwiperSlide className="carouselOfOne">
          <Link to="/view_live_streams" className="carouselOfOneItem">
            <img
              className="carouselOfOneItem__avatarTest"
              src={avatarTest}
              alt=""
            />
            <h4 className="carouselOfOneItem__nameOfAvatar">Joginder Singh</h4>
            <div className="carouselOfOneItem__linkLive">
              <p className="liveLink">live</p>
              <p className="redDot"></p>
            </div>
          </Link>
        </SwiperSlide>
        <SwiperSlide className="carouselOfOne">
          <Link to="/view_live_streams" className="carouselOfOneItem">
            <img
              className="carouselOfOneItem__avatarTest"
              src={avatarTest}
              alt=""
            />
            <h4 className="carouselOfOneItem__nameOfAvatar">Joginder Singh</h4>
            <div className="carouselOfOneItem__linkLive">
              <p className="liveLink">live</p>
              <p className="redDot"></p>
            </div>
          </Link>
        </SwiperSlide>
        <SwiperSlide className="carouselOfOne">
          <Link to="/view_live_streams" className="carouselOfOneItem">
            <img
              className="carouselOfOneItem__avatarTest"
              src={avatarTest}
              alt=""
            />
            <h4 className="carouselOfOneItem__nameOfAvatar">Joginder Singh</h4>
            <div className="carouselOfOneItem__linkLive">
              <p className="liveLink">live</p>
              <p className="redDot"></p>
            </div>
          </Link>
        </SwiperSlide>
        <SwiperSlide className="carouselOfOne">
          <Link to="/view_live_streams" className="carouselOfOneItem">
            <img
              className="carouselOfOneItem__avatarTest"
              src={avatarTest}
              alt=""
            />
            <h4 className="carouselOfOneItem__nameOfAvatar">Joginder Singh</h4>
            <div className="carouselOfOneItem__linkLive">
              <p className="liveLink">live</p>
              <p className="redDot"></p>
            </div>
          </Link>
        </SwiperSlide>
        <SwiperSlide className="carouselOfOne">
          <Link to="/view_live_streams" className="carouselOfOneItem">
            <img
              className="carouselOfOneItem__avatarTest"
              src={avatarTest}
              alt=""
            />
            <h4 className="carouselOfOneItem__nameOfAvatar">Joginder Singh</h4>
            <div className="carouselOfOneItem__linkLive">
              <p className="liveLink">live</p>
              <p className="redDot"></p>
            </div>
          </Link>
        </SwiperSlide>
        <SwiperSlide className="carouselOfOne">
          <Link to="/view_live_streams" className="carouselOfOneItem">
            <img
              className="carouselOfOneItem__avatarTest"
              src={avatarTest}
              alt=""
            />
            <h4 className="carouselOfOneItem__nameOfAvatar">Joginder Singh</h4>
            <div className="carouselOfOneItem__linkLive">
              <p className="liveLink">live</p>
              <p className="redDot"></p>
            </div>
          </Link>
        </SwiperSlide>
        <SwiperSlide className="carouselOfOne">
          <Link to="/view_live_streams" className="carouselOfOneItem">
            <img
              className="carouselOfOneItem__avatarTest"
              src={avatarTest}
              alt=""
            />
            <h4 className="carouselOfOneItem__nameOfAvatar">Joginder Singh</h4>
            <div className="carouselOfOneItem__linkLive">
              <p className="liveLink">live</p>
              <p className="redDot"></p>
            </div>
          </Link>
        </SwiperSlide>
        <SwiperSlide className="carouselOfOne">
          <Link to="/view_live_streams" className="carouselOfOneItem">
            <img
              className="carouselOfOneItem__avatarTest"
              src={avatarTest}
              alt=""
            />
            <h4 className="carouselOfOneItem__nameOfAvatar">Joginder Singh</h4>
            <div className="carouselOfOneItem__linkLive">
              <p className="liveLink">live</p>
              <p className="redDot"></p>
            </div>
          </Link>
        </SwiperSlide>
        <SwiperSlide className="carouselOfOne">
          <Link to="/view_live_streams" className="carouselOfOneItem">
            <img
              className="carouselOfOneItem__avatarTest"
              src={avatarTest}
              alt=""
            />
            <h4 className="carouselOfOneItem__nameOfAvatar">Joginder Singh</h4>
            <div className="carouselOfOneItem__linkLive">
              <p className="liveLink">live</p>
              <p className="redDot"></p>
            </div>
          </Link>
        </SwiperSlide>
        <SwiperSlide className="carouselOfOne">
          <Link to="/view_live_streams" className="carouselOfOneItem">
            <img
              className="carouselOfOneItem__avatarTest"
              src={avatarTest}
              alt=""
            />
            <h4 className="carouselOfOneItem__nameOfAvatar">Joginder Singh</h4>
            <div className="carouselOfOneItem__linkLive">
              <p className="liveLink">live</p>
              <p className="redDot"></p>
            </div>
          </Link>
        </SwiperSlide>
        <SwiperSlide className="carouselOfOne">
          <Link to="/view_live_streams" className="carouselOfOneItem">
            <img
              className="carouselOfOneItem__avatarTest"
              src={avatarTest}
              alt=""
            />
            <h4 className="carouselOfOneItem__nameOfAvatar">Joginder Singh</h4>
            <div className="carouselOfOneItem__linkLive">
              <p className="liveLink">live</p>
              <p className="redDot"></p>
            </div>
          </Link>
        </SwiperSlide>
        <SwiperSlide className="carouselOfOne">
          <Link to="/view_live_streams" className="carouselOfOneItem">
            <img
              className="carouselOfOneItem__avatarTest"
              src={avatarTest}
              alt=""
            />
            <h4 className="carouselOfOneItem__nameOfAvatar">Joginder Singh</h4>
            <div className="carouselOfOneItem__linkLive">
              <p className="liveLink">live</p>
              <p className="redDot"></p>
            </div>
          </Link>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
