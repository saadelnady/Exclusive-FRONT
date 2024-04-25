import { NavLink } from "react-router-dom";

import { CiHeart } from "react-icons/ci";
import { BsCart3 } from "react-icons/bs";

import Loading from "../../../Shared/Loading";
import { RxHamburgerMenu } from "react-icons/rx";
import UserDropDown from "./UserDropDown";
import { useSelector } from "react-redux";

import "./styles/User.css";
const User = ({ handleActiveNavBar }) => {
  const { isLoading, isLoggedIn } = useSelector((state) => state.userReducer);
  const { cart } = useSelector((state) => state.cartReducer);

  return (
    <div
      className={`user d-flex col-8 col-lg-3 ${
        isLoggedIn ? "justify-content-evenly" : "justify-content-end"
      }  align-items-center`}
    >
      {isLoggedIn && (
        <NavLink to="/wishList" className="position-relative ">
          <CiHeart className="fs-2 cursor-pointer" />
          <span className="position-absolute top-0 start-100 px-2 py-1 rounded-circle translate-middle text-light bg-danger  ">
            0
          </span>
        </NavLink>
      )}
      {isLoggedIn && (
        <NavLink to="/cart" className="position-relative ">
          <BsCart3 className="fs-2 cart cursor-pointer" />
          <span className="position-absolute top-0 start-100 px-2 py-1 rounded-circle translate-middle text-light bg-danger  ">
            {cart.length}
          </span>
        </NavLink>
      )}

      {isLoading && <Loading />}
      {isLoggedIn && <UserDropDown />}

      {!isLoggedIn && (
        <NavLink className="btn submit d-none d-lg-block" to="/login/seller">
          login as a Seller
        </NavLink>
      )}
      <RxHamburgerMenu
        className="burger-icon fs-1 cursor-pointer"
        onClick={() => {
          handleActiveNavBar();
        }}
      />
    </div>
  );
};
export default User;
