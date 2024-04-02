import React from "react";
import { FaArrowRight } from "react-icons/fa6";
import { FaArrowLeft } from "react-icons/fa6";
const SpecialHeading = ({ Heading, SectionTitle }) => {
  return (
    <>
      <h5 className="special-header ps-5 py-2 mb-5">{Heading}</h5>
      <div className="flash-sale row flex-wrap align-items-center justify-content-between">
        <h1 className="fw-bold col-12 col-md-6 ">{SectionTitle}</h1>
        <div className="col-12 col-md-1 d-flex  ">
          <div className="buttons mb-3 mb-md-0">
            <FaArrowLeft className="rounded-pill bg-light cursor-pointer fs-1 p-2" />
            <FaArrowRight className="rounded-pill bg-light cursor-pointer fs-1 p-2" />
          </div>
        </div>
      </div>
    </>
  );
};

export default SpecialHeading;
