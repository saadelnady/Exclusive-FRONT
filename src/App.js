import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Footer, Header } from "./components/shared";
import { Home, Login, Register, Contact, About } from "./routes";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
