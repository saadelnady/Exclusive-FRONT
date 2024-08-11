import { Route, Routes } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useEffect, useState } from "react";

import { fetchSellerProfile } from "../../store/actions/seller/sellerActions.js";
import { fetchCategories } from "../../store/actions/category/categoryActions.js";

import SellerSideBar from "../../components/Seller/Shared/SellerSideBar.jsx";
import SellerHeader from "../../components/Seller/Shared/SellerHeader.jsx";
import SellerDashboard from "../../components/Seller/SellerDashboard/SellerDashboard.jsx";
import AddProduct from "../../components/Seller/AddProduct/AddProduct.jsx";
import Products from "../../components/Seller/Products/Products.jsx";
import Profile from "../../components/Shared/Profile/Index.jsx";
import AllOrders from "../../components/Seller/AllOrders/AllOrders.jsx";
import Messages from "../../components/Seller/Inbox/Messages.jsx";
import DiscountCodes from "../../components/Seller/DiscountCodes/Index.jsx";

import "../../components/Seller/Shared/styles/seller.css";
import NotFoundPage from "../../components/Shared/NotFoundPage.jsx";

const Seller = ({ isWarning, handleShowWarning }) => {
  const [isActive, setIsActive] = useState(false);

  const handleSidebarActivation = () => {
    setIsActive(!isActive);
  };
  const dispatch = useDispatch();

  useEffect(() => {
    if (localStorage.getItem("TOKEN")) {
      dispatch(fetchSellerProfile());
      dispatch(fetchCategories());
    }
  }, [dispatch]);
  return (
    <div className="seller-layout">
      <SellerSideBar
        isActive={isActive}
        handleSidebarActivation={handleSidebarActivation}
      />
      <div className="d-flex flex-column w-100">
        <SellerHeader handleSidebarActivation={handleSidebarActivation} />
        <Routes>
          <Route path="/" element={<SellerDashboard />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/addProduct" element={<AddProduct />} />
          <Route path="/allorders" element={<AllOrders />} />

          <Route path="/messages" element={<Messages />} />
          <Route path="/discountcodes" element={<DiscountCodes />} />
          <Route
            path="/products/editProduct/:productId"
            element={<AddProduct />}
          />
          <Route
            path="/products"
            element={
              <Products
                isWarning={isWarning}
                handleShowWarning={handleShowWarning}
              />
            }
          />
          <Route path="*" element={<NotFoundPage navigateTo="/seller" />} />
        </Routes>
      </div>
    </div>
  );
};
export default Seller;
