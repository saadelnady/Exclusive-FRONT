import "../styles/Slider.css";
import announce from "../assets/images/pngs/announce.png";
import { NavLink } from "react-router-dom";
export const Slider = () => {
  return (
    <div className="col-md-8 col-md-9 mt-3 position-relative mb-5">
      <NavLink>
        <img src={announce} alt="" className="w-100" />
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
