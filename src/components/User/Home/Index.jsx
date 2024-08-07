import { NavLink } from "react-router-dom";
import CategoriesBrowse from "./CategoriesBrowse/CategoriesBrowse";
import Slider from "./Slider/Slider";
import BestSelling from "./BestSelling/BestSelling";
import FlashSale from "./FlashSale/FlashSale";
import OurProducts from "./OurProducts/OurProducts";
import NewArrival from "./NewArrival/NewArrival";
import AboutUs from "../../User/About/AboutUs";
import Categories from "./Categories/Categories";

import { useState } from "react";
import ProductModal from "../../Shared/ProductModal";

const Index = () => {
  const [targetProduct, setTargetProduct] = useState({});
  const [activeModal, setActiveModal] = useState(false);
  const handleTargetProduct = (e) => {
    setTargetProduct(e);
  };
  const handleActiveModal = () => {
    setActiveModal(!activeModal);
  };
  console.log("targetProduct ===>", targetProduct);
  return (
    <>
      {activeModal && (
        <ProductModal
          productId={targetProduct?._id}
          handleActiveModal={handleActiveModal}
        />
      )}
      <div className="container ">
        <div className="row justify-content-between align-items-between">
          <Categories />
          <Slider />
        </div>
        <FlashSale />
        {/* <CategoriesBrowse /> */}
        {/* <BestSelling /> */}
        {/* <NavLink>
        <img src={bgAnnounce2} alt="" className="w-100" />
      </NavLink> */}
        <OurProducts
          handleTargetProduct={handleTargetProduct}
          handleActiveModal={handleActiveModal}
        />
        {/* <NewArrival /> */}
        {/* <AboutUs /> */}
      </div>
    </>
  );
};

export default Index;
