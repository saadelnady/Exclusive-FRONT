import React from "react";
import { FaArrowRight } from "react-icons/fa6";
import { FaArrowLeft } from "react-icons/fa6";

const SpecialHeading = ({
  Heading,
  SectionTitle,
  onNextSlide,
  onPrevSlide,
}) => {
  return (
    <div className="special-heading">
      <h5 className="special-header ps-5 py-2 mb-5">{Heading}</h5>
      <div className="row flex-wrap align-items-center justify-content-between">
        <h1 className="fw-bold col-12 col-md-6">{SectionTitle}</h1>

        <div className="buttons mb-3 mb-md-0 d-none d-md-flex justify-content-end col-12 col-md-2">
          <button onClick={onPrevSlide} className="btn  ">
            <FaArrowLeft className="fs-3" />
          </button>

          <button onClick={onNextSlide} className="btn ">
            <FaArrowRight className="fs-3" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default SpecialHeading;
