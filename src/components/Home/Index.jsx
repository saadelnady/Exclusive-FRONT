import React, { useEffect } from "react";
import { useDispatch } from "react-redux";

import { CategoriesBrowse } from "./CategoriesBrowse";
import { Slider } from "./Slider";
import { FlashSale } from "./FlashSale";
import { BestSelling } from "./BestSelling";
import { NavLink } from "react-router-dom";
import { OurProducts } from "./OurProducts";
import { NewArrival } from "./NewArrival";
import { AboutUs } from "../About/AboutUs";
import { Categories } from "./Categories";

import bgAnnounce2 from "../../assets/images/pngs/bg-announce-2.png";

import { fetchUser } from "../../store/actions/user/userActions";
import { fetchCategories } from "../../store/actions/category/categoryActions";

const Index = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    if (localStorage.getItem("TOKEN")) {
      dispatch(fetchUser());
    }
    dispatch(fetchCategories({ limit: 7, page: 1 }));
  }, [dispatch]);
  return (
    <div className="container">
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
