import { NavLink } from "react-router-dom";
import bgAnnounce1 from "../../../assets/images/pngs/bg-announce-1.png";
import "./styles/Slider.css";

const Slider = () => {
  return (
    <div className="Slider mt-3 position-relative mb-5">
      <NavLink>
        <img src={bgAnnounce1} alt="" className="w-100" />
      </NavLink>
      <ul className="position-absolute bottom-0 start-50 translate-middle bullets d-flex justify-content-evenly">
        <li className="rounded-pill cursor-pointer"></li>
        <li className="rounded-pill cursor-pointer"></li>
        <li className="rounded-pill cursor-pointer active"></li>
        <li className="rounded-pill cursor-pointer"></li>
        <li className="rounded-pill cursor-pointer"></li>
      </ul>
    </div>
  );
};
export default Slider;
