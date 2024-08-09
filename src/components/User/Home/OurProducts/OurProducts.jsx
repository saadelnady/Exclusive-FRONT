import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import SpecialHeading from "../../Shared/SpecialHeading/SpecialHeading";
import Loading from "../../../Shared/Loading";
import Products from "./Products";
import AllProductsButton from "../../Shared/AllProductsButton/AllProductsButton";
import { fetchProducts } from "../../../../store/actions/product/productActions";
import { productStatus } from "../../../../helpers/options";

const OurProducts = ({ handleTargetProduct, handleActiveModal }) => {
  const { products, isLoading } = useSelector((state) => state.productReducer);
  const dispatch = useDispatch();
  const [page, setPage] = useState(1);
  const limit = 8;

  useEffect(() => {
    // Fetch products on component mount
    if (products?.length === 0 || products === null) {
       dispatch(
        fetchProducts({
          limit,
          page: 1, // Start with page 1
          status: productStatus.ACCEPTED,
          type: "notFlashSale",
        })
      );
    }
  }, [dispatch, limit]);

  const fetchNextProducts = () => {
    const nextPage = page + 1;

    if (products.length === 0) {
      // If current products array is empty and it's not the initial fetch (page 1),
      // fetch products for page 1 instead
      dispatch(
        fetchProducts({
          limit,
          page: 1, // Fetch products for page 1
          status: productStatus.ACCEPTED,
          type: "notFlashSale",
        })
      );
      setPage(1); // Reset page to 1
      return; // Exit the function
    }

    dispatch(
      fetchProducts({
        limit,
        page: nextPage,
        status: productStatus.ACCEPTED,
        type: "notFlashSale",
      })
    );
    setPage(nextPage);
  };

  const fetchPrevProducts = () => {
    const prevPage = Math.max(1, page - 1); // Calculate previous page
    dispatch(
      fetchProducts({
        limit,
        page: prevPage,
        status: productStatus.ACCEPTED,
        type: "notFlashSale",
      })
    );
    setPage(prevPage);
  };

  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <div className="border-bottom py-5 mb-5">
          <SpecialHeading
            Heading="Our Products"
            SectionTitle="Explore Our Products"
            onNextSlide={fetchNextProducts}
            onPrevSlide={fetchPrevProducts}
          />
          <Products
            products={products}
            handleTargetProduct={handleTargetProduct}
            handleActiveModal={handleActiveModal}
          />
          <AllProductsButton navigateTo="/products" />
        </div>
      )}
    </>
  );
};

export default OurProducts;
