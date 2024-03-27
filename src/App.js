import { Route, Routes } from "react-router-dom";
import { useState } from "react";
import "./App.css";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Admin from "./Layouts/Admin/Admin.jsx";
import Seller from "./Layouts/Seller/Seller.jsx";
import User from "./Layouts/User/User.jsx";
import { useSelector } from "react-redux";

function App() {
  const [isWarning, setIsWarning] = useState(false);
  const { user } = useSelector((state) => state.userReducer);
  const handleWarning = () => {
    setIsWarning(!isWarning);
  };

  return (
    <div className="App">
      <Routes>
        <Route path="/*" element={<User />} />

        <Route
          path="/admin/*"
          element={
            <Admin isWarning={isWarning} handleWarning={handleWarning} />
          }
        />

        <Route
          path="/seller/*"
          element={
            <Seller isWarning={isWarning} handleWarning={handleWarning} />
          }
        />
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
    </div>
  );
}

export default App;
