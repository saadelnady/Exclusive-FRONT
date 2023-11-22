import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Footer, Header } from "./components/shared";
import { Home, Login, Register } from "./pages";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
