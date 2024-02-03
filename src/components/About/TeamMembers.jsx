import React from "react";

import personOne from "../../assets/images/pngs/person-1.png";
import personOTwo from "../../assets/images/pngs/person-2.png";
import personThree from "../../assets/images/pngs/person-3.png";
import icTwitter2 from "../../assets/images/pngs/ic-Twitter-2.png";
import instagram2 from "../../assets/images/pngs/ic-instagram-2.png";
import linkedIn2 from "../../assets/images/pngs/ic-Linkedin-2.png";
import { NavLink } from "react-router-dom";
export const TeamMembers = () => {
  return (
    <div className="team-members my-5">
      <div className="row justify-content-center justify-content-sm-between">
        <div className="col-12 col-md-5 col-lg-3 mb-3">
          <div className="bg-light p-4 pb-0 team-member-img ">
            <img src={personOne} alt="" className="w-100 h-100" />
          </div>
          <h2 className="my-3 fw-bold">Tom Cruise</h2>
          <p>Founder & Chairman</p>
          <div className="social mt-4">
            <NavLink className="me-2">
              <img src={icTwitter2} alt="" />
            </NavLink>
            <NavLink className="me-2">
              <img src={instagram2} alt="" />
            </NavLink>
            <NavLink>
              <img src={linkedIn2} alt="" />
            </NavLink>
          </div>
        </div>
        <div className="col-12 col-md-5 col-lg-3 mb-3">
          <div className="bg-light p-4 pb-0 team-member-img ">
            <img src={personOTwo} alt="" className="w-100 h-100" />
          </div>
          <h2 className="my-3 fw-bold">Emma Watson</h2>
          <p>Managing Director</p>
          <div className="social mt-4">
            <NavLink className="me-2">
              <img src={icTwitter2} alt="" />
            </NavLink>
            <NavLink className="me-2">
              <img src={instagram2} alt="" />
            </NavLink>
            <NavLink>
              <img src={linkedIn2} alt="" />
            </NavLink>
          </div>
        </div>
        <div className="col-12 col-md-5 col-lg-3">
          <div className="bg-light p-4 pb-0 team-member-img ">
            <img src={personThree} alt="" className="w-100 h-100" />
          </div>
          <h2 className="my-3 fw-bold">Will Smith</h2>
          <p>Product Designer</p>
          <div className="social mt-4">
            <NavLink className="me-2">
              <img src={icTwitter2} alt="" />
            </NavLink>
            <NavLink className="me-2">
              <img src={instagram2} alt="" />
            </NavLink>
            <NavLink>
              <img src={linkedIn2} alt="" />
            </NavLink>
          </div>
        </div>
      </div>
      <ul className="d-flex mx-auto bullets justify-content-evenly align-items-center mt-4">
        <li className="rounded-pill cursor-pointer"></li>
        <li className="rounded-pill cursor-pointer"></li>
        <li className="rounded-pill cursor-pointer active"></li>
        <li className="rounded-pill cursor-pointer"></li>
        <li className="rounded-pill cursor-pointer"></li>
      </ul>
    </div>
  );
};
