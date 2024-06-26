import { IoIosNotifications } from "react-icons/io";
import { FaEnvelope } from "react-icons/fa";
import { useSelector } from "react-redux";
import { CgMenuRight } from "react-icons/cg";
import "./styles/SellerHeader.css";
import { serverUrl } from "../../../API/API";
import Loading from "../../Shared/Loading";
import { NavLink } from "react-router-dom";

const SellerHeader = ({ handleSidebarActivation }) => {
  const { seller, isLoading } = useSelector((state) => state.sellerReducer);

  return (
    <div className="Seller-header">
      <CgMenuRight
        className="fs-1 cursor-pointer burger-icon"
        onClick={() => {
          handleSidebarActivation();
        }}
      />
      <div className="d-flex align-items-center flex-wrap">
        <IoIosNotifications className="fs-2 cursor-pointer" />

        <NavLink to="/seller/messages">
          <FaEnvelope className="fs-2 cursor-pointer" />
        </NavLink>
        {isLoading ? (
          <Loading />
        ) : (
          <NavLink to="/seller/profile">
            <img
              src={`${serverUrl}/${seller.image}`}
              alt="Seller-img"
              className="Seller-image rounded-pill ms-3"
            />
          </NavLink>
        )}
      </div>
    </div>
  );
};
export default SellerHeader;
