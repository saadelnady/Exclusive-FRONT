import { Route, Routes, useNavigate } from "react-router-dom";

import { fetchSeller } from "../../store/actions/seller/sellerActions";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { SellerSideBar } from "../../components/Seller/shared/SellerSideBar";
import { SellerHeader } from "../../components/Seller/shared/SellerHeader";
import { SellerDashboard } from "../../components/Seller/SellerDashboard";
import { AddProduct } from "../../components/Seller/AddProduct";
import { Loading } from "../../components/shared/Loading";
import "../../components/Seller/styles/seller.css";
import Profile from "../../components/Profile/Index";

export const Seller = () => {
  const { isLoading } = useSelector((state) => state.sellerReducer);

  const [isActive, setIsActive] = useState(false);

  const handleSidebarActivation = () => {
    setIsActive(!isActive);
  };
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if (localStorage.getItem("TOKEN")) {
      dispatch(fetchSeller());
    } else {
      navigate("/seller/login");
    }
  }, [dispatch]);
  return (
    <>
      <div className="d-flex min-vh-100">
        <SellerSideBar
          isActive={isActive}
          handleSidebarActivation={handleSidebarActivation}
        />
        <div className="d-flex flex-column w-100">
          <SellerHeader />
          <Routes>
            <Route path="/" element={<SellerDashboard />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/addProduct" element={<AddProduct />} />
          </Routes>
        </div>
      </div>
      )}
    </>
  );
};
