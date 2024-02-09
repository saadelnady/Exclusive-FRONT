import { IoIosNotifications } from "react-icons/io";
import { FaEnvelope } from "react-icons/fa";
import { useSelector } from "react-redux";
import { serverUrl } from "../../../API/API";
import { CgMenuRight } from "react-icons/cg";
import "../styles/AdminHeader.css";
export const AdminHeader = ({ handleSidebarActivation }) => {
  const { user } = useSelector((state) => state.userReducer);
  return (
    <div className="admin-header">
      <CgMenuRight
        className="fs-1 cursor-pointer burger-icon"
        onClick={() => {
          handleSidebarActivation();
        }}
      />
      <div className="d-flex align-items-center">
        <IoIosNotifications className="fs-2 cursor-pointer" />
        <FaEnvelope className="fs-2 cursor-pointer" />
        <img
          src={`${serverUrl}/${user.userImage}`}
          alt="AdminImage"
          className="admin-image"
        />
        <p className="text-dark fs-3">{user.firstName}</p>
      </div>
    </div>
  );
};
