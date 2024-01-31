import { NavLink } from "react-router-dom";
import { IoIosNotifications } from "react-icons/io";
import { FaEnvelope } from "react-icons/fa";
import { useSelector } from "react-redux";

import "../../../styles/Admin/Header.css";

export const SellerHeader = () => {
  const { seller } = useSelector((state) => state.sellerReducer);
  console.log(seller);
  return (
    <div className="bg-light py-3 ">
      <div className="d-flex justify-content-between align-items-center border-bottom px-2 mx-3 mb-3">
        <NavLink to="/admin" className="fs-3 text-light fw-bold py-3 text-dark">
          Exclusive
        </NavLink>
        <div className="d-flex  align-items-center">
          <IoIosNotifications className="fs-2 cursor-pointer" />
          <FaEnvelope className="fs-2 cursor-pointer" />
          <img
            src={seller.sellerImage}
            alt="AdminImage"
            className="admin-image"
          />
          <p className="text-dark fs-3">{seller.firstName}</p>
        </div>
      </div>
    </div>
  );
};
