import { Route, Routes } from "react-router-dom";
import "./App.css";
import {
  Footer,
  Header,
  Profile,
  UserRegister,
  Home,
  UserLogin,
  Contact,
  About,
  Activation,
  Product,
  SellerLogin,
  SellerRegister,
  AdminDashboard,
} from "./routes";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { fetchUser } from "./store/actions/userActions";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    if (localStorage.getItem("TOKEN")) {
      dispatch(fetchUser());
    }
  }, [dispatch]);
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/userLogin" element={<UserLogin />} />
        <Route path="/userRegister" element={<UserRegister />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/product/:productId" element={<Product />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/sellerLogin" element={<SellerLogin />} />
        <Route path="/sellerRegister" element={<SellerRegister />} />
        <Route path="/activation/:activationToken" element={<Activation />} />
        <Route path="/adminDashboard" element={<AdminDashboard />} />
      </Routes>

      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
      <Footer />
    </div>
  );
}

export default App;
