import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchUser, fetchUsers } from "../../store/actions/userActions";
import { Route, Routes } from "react-router-dom";
import {
  AdminDashboard,
  AdminHeader,
  Profile,
  AdminSideBar,
  JoinRequests,
  Categories,
  SubCategories,
  AddCategory,
  AddSubCategory,
} from "../../routes";
import { fetchSellers } from "../../store/actions/sellerActions";
import { fetchCategories } from "../../store/actions/categoryActions";

export const Admin = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    if (localStorage.getItem("TOKEN")) {
      dispatch(fetchUser());
      dispatch(fetchUsers());
      dispatch(fetchSellers());
      dispatch(fetchCategories());
    }
  }, [dispatch]);
  return (
    <div className="d-flex ">
      <AdminSideBar />
      <div className="d-flex flex-column w-100 ">
        <AdminHeader />
        <Routes>
          <Route path="/" element={<AdminDashboard />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/joinRequests" element={<JoinRequests />} />
          <Route path="/Categories" element={<Categories />} />
          <Route path="/addCategory" element={<AddCategory />} />
          <Route path="/subCategories" element={<SubCategories />} />
          <Route path="/addSubCategory" element={<AddSubCategory />} />
        </Routes>
      </div>
    </div>
  );
};
