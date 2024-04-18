import { NavLink } from "react-router-dom";

import CategoriesBrowse from "./CategoriesBrowse/CategoriesBrowse";
import Slider from "./Slider/Slider";
import BestSelling from "./BestSelling/BestSelling";
import FlashSale from "./FlashSale/FlashSale";
import OurProducts from "./OurProducts/OurProducts";
import NewArrival from "./NewArrival/NewArrival";
import AboutUs from "../../User/About/AboutUs";
import Categories from "./Categories/Categories";
import bgAnnounce2 from "../../../assets/images/pngs/bg-announce-2.png";

const Index = () => {
  return (
    <div className="container ">
      <div className="row justify-content-between align-items-between">
        <Categories />
        <Slider />
      </div>
      <FlashSale />
      <CategoriesBrowse />
      <BestSelling />
      <NavLink>
        <img src={bgAnnounce2} alt="" className="w-100" />
      </NavLink>
      <OurProducts />
      <NewArrival />
      <AboutUs />
    </div>
  );
};

export default Index;
