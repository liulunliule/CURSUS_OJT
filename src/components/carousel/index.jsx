import React, { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "./index.scss";
import { avatarTest } from "../../assets";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllInstructorData } from "../../redux/features/allInstructorSlice";
import { Autoplay } from "swiper/modules";

export default function Carousel() {
  const dispatch = useDispatch();
  const userAllInstructor = useSelector((state) => state.allInstructor.data);
  useEffect(() => {
    dispatch(fetchAllInstructorData());
  }, [dispatch]);
  return (
    <>
      <Swiper
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
        slidesPerView={6}
        spaceBetween={10}
        modules={[Autoplay]}
        className="carouselMom"
      >
        {userAllInstructor &&
          userAllInstructor.map((instructor) => (
            <SwiperSlide className="carouselOfOne">
              <Link to="/view_live_streams" className="carouselOfOneItem">
                <img
                  className="carouselOfOneItem__avatarTest"
                  src={instructor.img}
                  alt=""
                />
                <h4 className="carouselOfOneItem__nameOfAvatar">
                  {instructor.name}
                </h4>
                <div className="carouselOfOneItem__linkLive">
                  <p className="liveLink">live</p>
                  <p className="redDot"></p>
                </div>
              </Link>
            </SwiperSlide>
          ))}
      </Swiper>
    </>
  );
}
