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

  return (
    <div className="user d-flex col-8 col-lg-3 justify-content-evenly align-items-center">
      <NavLink to="/wishList">
        <CiHeart className="fs-2 cursor-pointer" />
      </NavLink>
      <NavLink to="/cart">
        <BsCart3 className="fs-2 cart" />
      </NavLink>
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
