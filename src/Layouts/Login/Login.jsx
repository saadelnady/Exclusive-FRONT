import { Route, Routes } from "react-router-dom";
import SellerLogin from "../../components/Auth/Login/Seller/Index";
import UserLogin from "../../components/Auth/Login/User/Index";
import Header from "../../components/User/Shared/Header/Index";
import Footer from "../../components/User/Shared/Footer/Footer";

const Login = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/user" element={<UserLogin />}></Route>
        <Route path="/seller" element={<SellerLogin />}></Route>
      </Routes>
      <Footer />
    </>
  );
};

export default Login;
