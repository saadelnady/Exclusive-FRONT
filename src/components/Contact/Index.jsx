import React from "react";
import { NavLink } from "react-router-dom";
import { ContactInfo } from "./ContactInfo.jsx";
import { ContactForm } from "./ContactForm.jsx";
const Index = () => {
  return (
    <>
      <div className="links py-5">
        <NavLink to={"/"} className="fs-5 me-2">
          Home
        </NavLink>
        /
        <NavLink className="text-dark fs-5 ms-2" to={"/contact"}>
          Contact
        </NavLink>
      </div>
      <div className="row">
        <ContactInfo />
        <ContactForm />
      </div>
    </>
  );
};
export default Index;
