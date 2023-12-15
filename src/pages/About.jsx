import { NavLink } from "react-router-dom";
import contactBg from "../assets/images/pngs/bg-about-girls.png";
import icShop from "../assets/images/pngs/ic-shop.png";
import icDollarSign from "../assets/images/pngs/ic-dollar.png";
import icShoppingBag from "../assets/images/pngs/ic-mallbag.png";
import icMoneyBag from "../assets/images/pngs/ic-moneyBag.png";
import "../styles/About.css";
export const About = () => {
  return (
    <div className="container">
      <div className="links py-5">
        <NavLink to={"/"} className="fs-5 me-2">
          Home
        </NavLink>
        /
        <NavLink className="text-dark fs-5 ms-2" to={"/about"}>
          About
        </NavLink>
      </div>
      <div className="our-story row align-items-center flex-column-reverse flex-md-row ">
        <div className="col-12 col-md-5 mt-4 mt-md-0 text-center text-sm-start">
          <h1 className="fw-bold mb-4">Our Story</h1>
          <p className="fs-5 mb-3">
            Launced in 2015, Exclusive is South Asia’s premier online shopping
            makterplace with an active presense in Bangladesh. Supported by wide
            range of tailored marketing, data and service solutions, Exclusive
            has 10,500 sallers and 300 brands and serves 3 millioons customers
            across the region.
          </p>
          <p className="fs-5  ">
            Exclusive has more than 1 Million products to offer, growing at a
            very fast. Exclusive offers a diverse assotment in categories
            ranging from consumer.
          </p>
        </div>
        <div className="offset-md-1 col-12 col-md-6">
          <img src={contactBg} alt="" className="w-100" />
        </div>
      </div>
      <div className="statistics d-flex flex-wrap justify-content-center  gap-5 justify-content-md-between mt-5">
        <div className="border rounded p-4  text-center  ">
          <div className="statistic-img  mx-auto   bg-dark rounded-pill p-4">
            <img src={icShop} alt="" className="w-100" />
          </div>
          <h4>10.5k</h4>
          <p>Sallers active our site</p>
        </div>
        <div className="border rounded p-4 text-center   ">
          <div className=" statistic-img mx-auto bg-dark rounded-pill p-4">
            <img src={icDollarSign} alt="" className="w-100" />
          </div>
          <h4>33k</h4>
          <p>Mopnthly Produduct Sale</p>
        </div>
        <div className="border rounded p-4 text-center  ">
          <div className=" statistic-img mx-auto bg-dark rounded-pill p-4">
            <img src={icShoppingBag} alt="" className="w-100" />
          </div>
          <h4>45.5k</h4>
          <p>Customer active in our site</p>
        </div>
        <div className="border rounded p-4 text-center  ">
          <div className="statistic-img  mx-auto bg-dark rounded-pill p-4">
            <img src={icMoneyBag} alt="" className="w-100" />
          </div>
          <h4>25k</h4>
          <p>Anual gross sale in our site</p>
        </div>
      </div>
    </div>
  );
};
