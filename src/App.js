import { Route, Routes, useLocation } from "react-router-dom";
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
  Seller,
  Admin,
} from "./routes";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const location = useLocation();

  const shouldHide =
    location.pathname.startsWith("/admin") ||
    location.pathname.startsWith("/seller");

  return (
    <div className="App">
      {!shouldHide && <Header />}
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
        <Route path="/admin/*" element={<Admin />} />
        <Route path="/seller/*" element={<Seller />} />
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
      {!shouldHide && <Footer />}
    </div>
  );
}

export default App;
