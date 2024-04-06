import React from "react";
import { useSelector } from "react-redux";
import SpecialHeading from "../../Shared/SpecialHeading/SpecialHeading";
import Loading from "../../../Shared/Loading";
import ProductsSlider from "../../Shared/ProductsSlider/ProductsSlider";

const OurProducts = () => {
  const { isLoading, products } = useSelector((state) => state.productReducer);

  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <div className="border-bottom py-5 mb-5">
          <SpecialHeading
            Heading="Our Products"
            SectionTitle="Explore Our Products"
          />
          <ProductsSlider products={products} />
          <div className="text-center">
            <button className="btn submit py-3 px-5 fs-6">
              View All Products
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default OurProducts;
