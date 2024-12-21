import { IoIosNotifications } from "react-icons/io";
import { FaEnvelope } from "react-icons/fa";
import { useSelector } from "react-redux";
import { serverUrl } from "../../../API/API";
import { CgMenuRight } from "react-icons/cg";
import "./styles/AdminHeader.css";
import ToggleTheme from "./ToggleTheme";

export const AdminHeader = ({ handleSidebarActivation }) => {
  const { user } = useSelector((state) => state.userReducer);
  const { theme } = useSelector((state) => state.themeReducer);

  return (
    <div className="admin-header">
      <CgMenuRight
        className="fs-1 cursor-pointer burger-icon"
        onClick={() => {
          handleSidebarActivation();
        }}
      />
      <div className="d-flex align-items-center flex-wrap">
        <ToggleTheme />
        <IoIosNotifications className="fs-2 cursor-pointer" />
        <FaEnvelope className="fs-2 cursor-pointer" />
        <img
          src={`${serverUrl}/${user.image}`}
          alt="AdminImage"
          className="admin-image rounded-pill ms-3"
        />
      </div>
    </div>
  );
};
