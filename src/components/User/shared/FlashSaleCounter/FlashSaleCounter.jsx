import moment from "moment";
import React, { useEffect, useState } from "react";
import { TfiTimer } from "react-icons/tfi";

const FlashSaleCounter = ({ duration }) => {
  const targetDate = moment(duration);
  const [countdown, setCountdown] = useState(
    moment.duration(targetDate.diff(moment()))
  );

  useEffect(() => {
    const interval = setInterval(() => {
      setCountdown(moment.duration(targetDate.diff(moment())));
    }, 1000);
    return () => clearInterval(interval);
  }, [targetDate]);

  const formattedDays = countdown.days().toString().padStart(2, "0");
  const formattedHours = countdown.hours().toString().padStart(2, "0");
  const formattedMinutes = countdown.minutes().toString().padStart(2, "0");
  const formattedSeconds = countdown.seconds().toString().padStart(2, "0");
  return (
    <div className="sale-counter m-3 d-flex align-items-center justify-content-center">
      <TfiTimer className="fs-1 me-3" />

      <div className="days">
        <p>Days</p>
        <h5 className="fw-bold fs-3">{formattedDays}</h5>
      </div>
      <span className="  mx-1">:</span>
      <div className="hours">
        <p>Hours</p>
        <h5 className="fw-bold fs-3">{formattedHours}</h5>
      </div>
      <span className="  mx-1">:</span>
      <div className="minutes">
        <p>Minutes</p>
        <h5 className="fw-bold fs-3">{formattedMinutes}</h5>
      </div>
      <span className="  mx-1">:</span>
      <div className="seconds">
        <p>Seconds</p>
        <h5 className="fw-bold fs-3">{formattedSeconds}</h5>
      </div>
    </div>
  );
};

export default FlashSaleCounter;
