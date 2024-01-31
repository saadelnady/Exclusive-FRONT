import { Route, Routes } from "react-router-dom";
import {
  AddProduct,
  Loading,
  Profile,
  SellerDashboard,
  SellerHeader,
  SellerSideBar,
} from "../../routes";
import { fetchSeller } from "../../store/actions/sellerActions";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

export const Seller = () => {
  const { isLoading } = useSelector((state) => state.sellerReducer);
  console.log(isLoading);
  const dispatch = useDispatch();

  useEffect(() => {
    if (localStorage.getItem("TOKEN")) {
      dispatch(fetchSeller());
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
