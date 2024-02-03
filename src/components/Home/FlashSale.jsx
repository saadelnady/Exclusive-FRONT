import "../../styles/Sale.css";
import arrow_left from "../../assets/images/pngs/ic-arrow-left.png";
import arrow_right from "../../assets/images/pngs/ic-arrow-right.png";
import { Card } from "../shared/Card";
export const FlashSale = () => {
  return (
    <div className="border-bottom py-5 mb-5">
      <h5 className="special-header ps-5 py-2 mb-5">Today’s</h5>
      <div className="flash-sale row flex-wrap align-items-center ">
        <h1 className="fw-bold col-12 col-md-2 text-center text-md-start">
          Flash Sales
        </h1>
        <div className="col-12 col-md-10 d-flex justify-content-evenly justify-content-md-between align-items-center flex-wrap">
          <div className="sale-counter m-0 ms-md-5 d-flex align-items-center">
            <div className="days">
              <p className="fw-bold">Days</p>
              <h1 className="fw-bold ">03</h1>
            </div>
            <span className="fs-3 mx-3">:</span>
            <div className="hours">
              <p className="fw-bold">Hours</p>
              <h1 className="fw-bold ">23</h1>
            </div>
            <span className="fs-3 mx-3">:</span>
            <div className="minutes">
              <p className="fw-bold">Minutes</p>
              <h1 className="fw-bold ">19</h1>
            </div>
            <span className="fs-3 mx-3">:</span>
            <div className="seconds">
              <p className="fw-bold">Seconds</p>
              <h1 className="fw-bold ">03</h1>
            </div>
          </div>
          <div className="buttons mb-3 mb-md-0">
            <img
              src={arrow_left}
              alt=""
              className="rounded-pill bg-light p-3 me-3 cursor-pointer"
            />
            <img
              src={arrow_right}
              alt=""
              className="rounded-pill bg-light p-3 cursor-pointer"
            />
          </div>
        </div>
      </div>
      <div className="d-flex justify-content-between overflow-hidden">
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
      <div className="text-center">
        <button className="btn submit py-3 px-5 fs-6">View All Products</button>
      </div>
    </div>
  );
};
