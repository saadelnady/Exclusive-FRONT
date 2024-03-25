import React from "react";
import contactBg from "../../../assets/images/pngs/bg-about-girls.png";

export const OurStory = () => {
  return (
    <div className="our-story row align-items-center flex-column-reverse flex-md-row ">
      <div className="col-12 col-md-5 mt-4 mt-md-0 text-center text-sm-start">
        <h1 className="fw-bold mb-4">Our Story</h1>
        <p className="fs-5 mb-3">
          Launced in 2015, Exclusive is South Asia’s premier online shopping
          makterplace with an active presense in Bangladesh. Supported by wide
          range of tailored marketing, data and service solutions, Exclusive has
          10,500 sallers and 300 brands and serves 3 millioons customers across
          the region.
        </p>
        <p className="fs-5  ">
          Exclusive has more than 1 Million products to offer, growing at a very
          fast. Exclusive offers a diverse assotment in categories ranging from
          consumer.
        </p>
      </div>
      <div className="offset-md-1 col-12 col-md-6">
        <img src={contactBg} alt="" className="w-100" />
      </div>
    </div>
  );
};
