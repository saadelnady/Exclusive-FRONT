import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchUser, fetchUsers } from "../store/actions/userActions";
import { Route, Routes } from "react-router-dom";
import { AdminDashboard, AdminHeader, Profile, AdminSideBar } from "../routes";
import { fetchSellers } from "../store/actions/sellerActions";
export const Admin = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    if (localStorage.getItem("TOKEN")) {
      dispatch(fetchUser());
      dispatch(fetchUsers());
      dispatch(fetchSellers());
    }
  }, [dispatch]);
  return (
    <div className="d-flex">
      <AdminSideBar />
      <div className="d-flex flex-column w-100">
        <AdminHeader />
        <Routes>
          <Route path="/" element={<AdminDashboard />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </div>
    </div>
  );
};
