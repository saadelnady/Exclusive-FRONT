import { NavLink, useNavigate } from "react-router-dom";

import { HiOutlineLogout } from "react-icons/hi";
import { toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import { sellerLogout } from "../../../store/actions/seller/sellerActions";

import { FaXmark } from "react-icons/fa6";
import { FaHome } from "react-icons/fa";
import { FaRegUserCircle } from "react-icons/fa";
import { FiShoppingBag } from "react-icons/fi";
import { BiMessageDetail } from "react-icons/bi";
import { LiaCubesSolid } from "react-icons/lia";
import { AiOutlineFolderAdd } from "react-icons/ai";

import "./styles/sellerSideBar.css";
const SellerSideBar = ({ isActive, handleSidebarActivation }) => {
  const { seller } = useSelector((state) => state.sellerReducer);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleLogOut = () => {
    const payLoad = { toast, navigate };
    dispatch(sellerLogout(payLoad));
  };

  return (
    <div className={`Seller-Sidebar px-3 ${isActive ? "active" : ""}`}>
      <div className="d-flex justify-content-between align-items-center ">
        <h2 className="text-light py-5 ">{seller.firstName}.</h2>
        <FaXmark
          onClick={() => {
            handleSidebarActivation();
          }}
          className="close-Sidebar"
        />
      </div>
      <div className="Seller-links d-flex justify-content-between flex-column">
        <ul className="main-links">
          <li className="fs-5">
            <NavLink to="/seller" className="d-flex align-items-center">
              <FaHome className="fs-3" />
              Dashboard
            </NavLink>
          </li>
          <li className="fs-5">
            <NavLink to="/seller/profile" className="d-flex align-items-center">
              <FaRegUserCircle className="fs-3" />
              Profile
            </NavLink>
          </li>
          <li className="fs-5">
            <NavLink
              to="/seller/allorders"
              className="d-flex align-items-center"
            >
              <FiShoppingBag className="fs-3" />
              AllOrders
            </NavLink>
          </li>
          <li className="fs-5">
            <NavLink to="/seller/messages">
              <BiMessageDetail className="fs-3" />
              Inbox
            </NavLink>
          </li>

          <li className="fs-5 ">
            <NavLink to="/seller/products">
              <LiaCubesSolid className="fs-3" />
              My products
            </NavLink>
          </li>

          <li className="fs-5 ">
            <NavLink to="/seller/addproduct">
              <AiOutlineFolderAdd className="fs-3" /> Add product
            </NavLink>
          </li>
        </ul>
        <button
          className="btn btn-danger"
          onClick={() => {
            handleLogOut();
          }}
        >
          <HiOutlineLogout /> Log out
        </button>
      </div>
    </div>
  );
};
export default SellerSideBar;
