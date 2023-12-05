import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Footer, Header } from "./components/shared";
import { Home, Login, Register, Contact, About, Activation } from "./routes";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useEffect } from "react";
import axios from "axios";
import { serverUrl } from "./utils/utils";
function App() {
  useEffect(() => {
    axios
      .get(`${serverUrl}/api/users/getProfile`, {
        headers: {
          token: JSON.parse(localStorage.getItem("TOKEN")), // Send the token in the 'Authorization' header
        },
      })
      .then((res) => {
        console.log(res.data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/activation/:activationToken" element={<Activation />} />
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
