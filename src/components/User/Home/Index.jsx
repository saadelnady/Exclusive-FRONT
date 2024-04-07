import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
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

import { fetchCategories } from "../../../store/actions/category/categoryActions";
import {
  fetchFlashSalesProducts,
  fetchProducts,
} from "../../../store/actions/product/productActions";
import { productStatus } from "../../../helpers/options";

const Index = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchCategories({ limit: 7, page: 1 }));

    dispatch(
      fetchFlashSalesProducts({
        limit: 8,
        page: 1,
        status: productStatus.ACCEPTED,
        type: "flashSale",
      })
    );

    dispatch(
      fetchProducts({
        limit: 8,
        page: 1,
        status: productStatus.ACCEPTED,
        type: "notFlashSale",
      })
    );
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
