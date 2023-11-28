import mobileImage from "../assets/images/pngs/mobile.png";
import { NavLink } from "react-router-dom";
import "../styles/Auth.css";

export const Login = () => {
  return (
    <div>
      <div className="login row align-items-center">
        <div className="col-12 col-md-6">
          <img src={mobileImage} alt="mobileImage" className="w-100" />
        </div>
        <div className="col-10 mx-auto  offset-md-2 col-md-5 col-lg-4 text-center text-md-start fw-bold p-5">
          <h1 className="fs-1">Log in to Exclusive</h1>
          <p className="fs-5 fw-normal">Enter your details below</p>
          <form action="">
            <input
              type="email"
              placeholder="E-mail"
              className="form-control mb-5 fs-4"
            />
            <input
              type="password"
              placeholder="Password"
              className="form-control mb-5 fs-4"
            />
            <div className="d-flex justify-content-between align-items-center">
              <button className="btn text-center p-3 fs-4 submit ">
                Login
              </button>
              <NavLink className="forget-password p-3 fs-5">
                Forget Password ?
              </NavLink>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
