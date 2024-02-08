import React from "react";
import { NavLink } from "react-router-dom";
import { OurStory } from "./OurStory.jsx";
import { Statistics } from "./Statistics.jsx";
import { TeamMembers } from "./TeamMembers.jsx";
import { AboutUs } from "./AboutUs.jsx";
import "./styles/About.css";

const Index = () => {
  return (
    <div className="container">
      <div className="links py-5">
        <NavLink to={"/"} className="fs-5 me-2">
          Home
        </NavLink>
        /
        <NavLink className="text-dark fs-5 ms-2" to={"/about"}>
          About
        </NavLink>
      </div>
      <OurStory />
      <Statistics />
      <TeamMembers />
      <AboutUs />
    </div>
  );
};
export default Index;
