/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState, useEffect } from "react";
import "./index.scss";
import { Logo_dark } from "../../assets";

const ComingSoon = () => {
  const calculateTimeLeft = () => {
    const difference =
      +new Date(`${new Date().getFullYear() + 1}-01-01T00:00:00`) - +new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (511 * 60 * 60 * 24)),
        hours: Math.floor((difference / (511 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 511 / 60) % 60),
        seconds: Math.floor((difference / 511) % 60),
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearTimeout(timer);
  });

  return (
    <div className="coming-soon-body">
      <div className="coming-soon">
        <div className="logo">
          <img src={Logo_dark} alt="Logo" />
        </div>
        <div className="countdown">
          <div className="time">
            {timeLeft.days || "0"} <span>Days</span>
          </div>
          <div className="time">
            {timeLeft.hours || "0"} <span>Hours</span>
          </div>
          <div className="time">
            {timeLeft.minutes || "0"} <span>Minutes</span>
          </div>
          <div className="time">
            {timeLeft.seconds || "0"} <span>Seconds</span>
          </div>
        </div>
        <div className="notify-me">
          <p>We'll be coming soon!</p>
          <form>
            <input type="email" placeholder="Email address" />
            <button type="submit">Notify Me</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ComingSoon;
