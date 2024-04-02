import { NavLink } from "react-router-dom";
import arrival1 from "../../../../assets/images/pngs/Arrival-1.png";
import arrival2 from "../../../../assets/images/pngs/Arrival-2.png";
import arrival3 from "../../../../assets/images/pngs/Arrival-3.png";
import arrival4 from "../../../../assets/images/pngs/Arrival-4.png";

const NewArrivalProducts = () => {
  return (
    <div className="row justify-content-between">
      <div className="col-12 col-lg-5 mb-4 mb-lg-0">
        <NavLink>
          <img src={arrival1} alt="" className="w-100 h-100" />
        </NavLink>
      </div>
      <div className="col-12 col-lg-6">
        <div className="col-12 mb-4 mb-lg-3">
          <NavLink>
            <img src={arrival2} alt="" className="w-100" />
          </NavLink>
        </div>
        <div className="row justify-content-center justify-content-lg-between mb-4 mb-lg-0">
          <div className="col-12 col-lg-5 mb-4 mb-lg-0">
            <NavLink>
              <img src={arrival3} alt="" className="w-100" />
            </NavLink>
          </div>
          <div className="col-12 col-lg-5 mb-4 mb-lg-0">
            <NavLink>
              <img src={arrival4} alt="" className="w-100" />
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewArrivalProducts;
