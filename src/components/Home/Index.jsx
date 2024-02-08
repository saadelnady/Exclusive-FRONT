import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchUser } from "../../store/actions/userActions";
import { CategoriesBrowse } from "./CategoriesBrowse";
import { Slider } from "./Slider";
import { FlashSale } from "./FlashSale";
import { BestSelling } from "./BestSelling";
import { NavLink } from "react-router-dom";
import { OurProducts } from "./OurProducts";
import { NewArrival } from "./NewArrival";
import { AboutUs } from "../About/AboutUs";
import bgAnnounce2 from "../../assets/images/pngs/bg-announce-2.png";
import { Categories } from "./Categories";
import { fetchCategories } from "../../store/actions/categoryActions";

const Index = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    if (localStorage.getItem("TOKEN")) {
      dispatch(fetchUser());
      dispatch(fetchCategories());
    }
  }, [dispatch]);
  return (
    <div className="container">
      <div className="row justify-content-between align-items-between">
        <Categories />
        <Slider />
      </div>
      <CategoriesBrowse />
      <FlashSale />
      <CategoriesBrowse />
      <BestSelling />
      <div>
        <NavLink>
          <img src={bgAnnounce2} alt="" className="w-100" />
        </NavLink>
      </div>
      <OurProducts />
      <NewArrival />
      <AboutUs />
    </div>
  );
};

export default Index;
