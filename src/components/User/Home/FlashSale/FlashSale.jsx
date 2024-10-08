import { useState } from "react";
import { useSelector } from "react-redux";

import Loading from "../../../Shared/Loading";
import ProductsSlider from "../../Shared/ProductsSlider/ProductsSlider";
import AllProductsButton from "../../Shared/AllProductsButton/AllProductsButton";
import SpecialHeading from "../../../Shared/SpecialHeading";

const FlashSale = () => {
  const { flashSalesProducts, isLoading } = useSelector(
    (state) => state.productReducer
  );
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);

  const handleNextSlide = () => {
    setCurrentSlideIndex((prevIndex) =>
      prevIndex < flashSalesProducts.length - 1 ? prevIndex + 1 : 0
    );
  };

  const handlePrevSlide = () => {
    setCurrentSlideIndex((prevIndex) =>
      prevIndex > 0 ? prevIndex - 1 : flashSalesProducts.length - 1
    );
  };
  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <div className="border-bottom py-5 mb-5">
          <SpecialHeading
            title="Today’s"
            SectionTitle="Flash Sales"
            onNextSlide={handleNextSlide}
            onPrevSlide={handlePrevSlide}
          />
          <ProductsSlider
            products={flashSalesProducts}
            currentSlideIndex={currentSlideIndex}
          />
          <AllProductsButton navigateTo="/products/flashsales" />
        </div>
      )}
    </>
  );
};
export default FlashSale;
