import { IoIosNotifications } from "react-icons/io";
import { FaEnvelope } from "react-icons/fa";
import { useSelector } from "react-redux";
import { CgMenuRight } from "react-icons/cg";
import "../styles/SellerHeader.css";
import { serverUrl } from "../../../API/API";
export const SellerHeader = ({ handleSidebarActivation }) => {
  const { seller } = useSelector((state) => state.sellerReducer);

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
        <FaEnvelope className="fs-2 cursor-pointer" />
        <img
          src={`${serverUrl}/${seller.image}`}
          alt="Seller-img"
          className="Seller-image"
        />
      </div>
    </div>
  );
};
