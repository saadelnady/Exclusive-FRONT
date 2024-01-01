import { NavLink, useNavigate } from "react-router-dom";
import "../../../styles/Admin/SideBar.css";
import { useSelector } from "react-redux";
import { CgMenuRight } from "react-icons/cg";
import { HiOutlineLogout } from "react-icons/hi";
import { toast } from "react-toastify";

export const AdminSideBar = () => {
  const { user } = useSelector((state) => state.userReducer);

  const navigate = useNavigate();

  const handleLogOut = () => {
    localStorage.removeItem("TOKEN");
    toast.success("You have logged out");
    navigate("/userLogin");
    window.location.reload();
  };

  return (
    <aside className="SideBar px-3 ">
      <div className="d-flex justify-content-between align-items-center px-1  ">
        <h2 className="text-light py-5 px-3">{user.firstName}.</h2>
        <CgMenuRight className="text-light fs-1 cursor-pointer" />
      </div>
      <div className="h-50 d-flex justify-content-between flex-column">
        <ul>
          <li className="fs-5">
            <NavLink to="/admin">Dashboard</NavLink>
          </li>
          <li className="fs-5">
            <NavLink to="/admin/profile">Profile</NavLink>
          </li>
          <li className="fs-5">
            <NavLink to=""></NavLink>
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
    </aside>
  );
};
