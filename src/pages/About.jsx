import { NavLink } from "react-router-dom";
import contactBg from "../assets/images/pngs/bg-about-girls.png";
import icShop from "../assets/images/pngs/ic-shop.png";
import icDollarSign from "../assets/images/pngs/ic-dollar.png";
import icShoppingBag from "../assets/images/pngs/ic-mallbag.png";
import icMoneyBag from "../assets/images/pngs/ic-moneyBag.png";
import personOne from "../assets/images/pngs/person-1.png";
import personOTwo from "../assets/images/pngs/person-2.png";
import personThree from "../assets/images/pngs/person-3.png";
import icTwitter2 from "../assets/images/pngs/ic-Twitter-2.png";
import instagram2 from "../assets/images/pngs/ic-instagram-2.png";
import linkedIn2 from "../assets/images/pngs/ic-Linkedin-2.png";
import { AboutUs } from "../routes";
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
          <div className="statistic-img mx-auto rounded-pill mb-3 bg-black">
            <img src={icShop} alt="" />
          </div>
          <h4>10.5k</h4>
          <p>Sallers active our site</p>
        </div>
        <div className="border rounded p-4 text-center   ">
          <div className="statistic-img mx-auto rounded-pill bg-black mb-3">
            <img src={icDollarSign} alt="" />
          </div>
          <h4>33k</h4>
          <p>Mopnthly Produduct Sale</p>
        </div>
        <div className="border rounded p-4 text-center  ">
          <div className=" statistic-img mx-auto rounded-pill  bg-black mb-3">
            <img src={icShoppingBag} alt="" />
          </div>
          <h4>45.5k</h4>
          <p>Customer active in our site</p>
        </div>
        <div className="border rounded p-4 text-center  ">
          <div className="statistic-img  mx-auto rounded-pill mb-3 bg-black">
            <img src={icMoneyBag} alt="" />
          </div>
          <h4>25k</h4>
          <p>Anual gross sale in our site</p>
        </div>
      </div>
      <div className="team-members my-5">
        <div className="row justify-content-center justify-content-sm-between">
          <div className="col-12 col-md-5 col-lg-3 mb-3">
            <div className="bg-light p-4 pb-0 team-member-img ">
              <img src={personOne} alt="" className="w-100 h-100" />
            </div>
            <h2 className="my-3 fw-bold">Tom Cruise</h2>
            <p>Founder & Chairman</p>
            <div className="social mt-4">
              <NavLink className="me-2">
                <img src={icTwitter2} alt="" />
              </NavLink>
              <NavLink className="me-2">
                <img src={instagram2} alt="" />
              </NavLink>
              <NavLink>
                <img src={linkedIn2} alt="" />
              </NavLink>
            </div>
          </div>
          <div className="col-12 col-md-5 col-lg-3 mb-3">
            <div className="bg-light p-4 pb-0 team-member-img ">
              <img src={personOTwo} alt="" className="w-100 h-100" />
            </div>
            <h2 className="my-3 fw-bold">Emma Watson</h2>
            <p>Managing Director</p>
            <div className="social mt-4">
              <NavLink className="me-2">
                <img src={icTwitter2} alt="" />
              </NavLink>
              <NavLink className="me-2">
                <img src={instagram2} alt="" />
              </NavLink>
              <NavLink>
                <img src={linkedIn2} alt="" />
              </NavLink>
            </div>
          </div>
          <div className="col-12 col-md-5 col-lg-3">
            <div className="bg-light p-4 pb-0 team-member-img ">
              <img src={personThree} alt="" className="w-100 h-100" />
            </div>
            <h2 className="my-3 fw-bold">Will Smith</h2>
            <p>Product Designer</p>
            <div className="social mt-4">
              <NavLink className="me-2">
                <img src={icTwitter2} alt="" />
              </NavLink>
              <NavLink className="me-2">
                <img src={instagram2} alt="" />
              </NavLink>
              <NavLink>
                <img src={linkedIn2} alt="" />
              </NavLink>
            </div>
          </div>
        </div>
        <ul className="d-flex mx-auto bullets justify-content-evenly align-items-center mt-4">
          <li className="rounded-pill cursor-pointer"></li>
          <li className="rounded-pill cursor-pointer"></li>
          <li className="rounded-pill cursor-pointer active"></li>
          <li className="rounded-pill cursor-pointer"></li>
          <li className="rounded-pill cursor-pointer"></li>
        </ul>
      </div>
      <AboutUs />
    </div>
  );
};
