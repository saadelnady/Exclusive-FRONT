import arrow_left from "../assets/images/pngs/ic-arrow-left.png";
import arrow_right from "../assets/images/pngs/ic-arrow-right.png";
import { Card } from "../routes";

export const OurProducts = () => {
  return (
    <div className="border-bottom py-5 mb-5">
      <h5 className="special-header ps-5 py-2 mb-5">Our Products</h5>
      <div className="d-flex justify-content-between flex-wrap mb-4">
        <h1 className="fw-bold text-center text-md-start">
          Explore Our Products
        </h1>

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
      <div className="d-flex justify-content-between  flex-wrap">
        <Card />
        <Card />
        <Card />
        <Card />
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
