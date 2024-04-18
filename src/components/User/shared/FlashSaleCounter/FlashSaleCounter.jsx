import React, { useEffect, useState } from "react";
import { TfiTimer } from "react-icons/tfi";
import "./styles/FlashSaleCounter.css";

const FlashSaleCounter = ({ date }) => {
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
    return () => clearTimeout(timer);
  });

  function calculateTimeLeft() {
    const difference = +new Date(date) - +new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  }

  const timerComponents = Object.keys(timeLeft).map((interval) => {
    if (!timeLeft[interval]) {
      return null;
    }

    return (
      <div className="me-3 d-flex align-items-center">
        <div>
          <p className="fw-bold time">{interval}</p>
          <p className="fw-bold"> {timeLeft[interval]}</p>
        </div>
        {interval !== "seconds" && <span className="mx-1">:</span>}
      </div>
    );
  });

  return (
    <div>
      {timerComponents.length ? (
        <div className="m-1 d-flex align-items-center justify-content-center">
          <TfiTimer className="fs-2 me-3" /> {timerComponents}
        </div>
      ) : (
        <h3>Time's Up</h3>
      )}
    </div>
  );
};

export default FlashSaleCounter;
