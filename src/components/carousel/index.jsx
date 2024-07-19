import React, { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "./index.scss";
import { avatarTest } from "../../assets";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllInstructorData } from "../../redux/features/allInstructorSlice";

export default function Carousel() {
  const dispatch = useDispatch();
  const userAllInstructor = useSelector((state) => state.allInstructor.data);
  useEffect(() => {
    dispatch(fetchAllInstructorData());
  }, [dispatch]);
  return (
    <>
      <Swiper
        slidesPerView={6}
        spaceBetween={10}
        modules={[]}
        className="carouselMom"
      >
        {userAllInstructor.map((instructor) => (
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
