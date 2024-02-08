import { Route, Routes, useNavigate } from "react-router-dom";

import { fetchSeller } from "../../store/actions/sellerActions";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { SellerSideBar } from "../../components/Seller/SellerSideBar";
import { SellerHeader } from "../../components/Seller/SellerHeader";
import { SellerDashboard } from "../../components/Seller/SellerDashboard";
import { AddProduct } from "../../components/Seller/AddProduct";
import { Loading } from "../../components/shared/Loading";
import "../../components/Seller/styles/seller.css";
import Profile from "../../components/Profile/Index";

export const Seller = () => {
  const { isLoading } = useSelector((state) => state.sellerReducer);
  console.log(isLoading);
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
      {isLoading && <Loading />}
      {
        <div className="d-flex min-vh-100">
          <SellerSideBar />
          <div className="d-flex flex-column w-100">
            <SellerHeader />
            <Routes>
              <Route path="/" element={<SellerDashboard />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/addProduct" element={<AddProduct />} />
            </Routes>
          </div>
        </div>
      }
    </>
  );
};
