import "./styles/Product.css";
import ProductSlider from "./ProductSlider";
import { useSelector } from "react-redux";

import Links from "./Links";
import Details from "./Details";
import { Loading } from "../../shared/Loading";

export const ProductDetails = () => {
  const { product, isLoading } = useSelector((state) => state.productReducer);
  console.log("product ===", product);
  const images = product?.images;

  return isLoading ? (
    <Loading />
  ) : (
    <div className="container mb-5">
      <Links product={product} /> {/* Rendering links related to the product */}
      <div className="details row">
        <ProductSlider images={images} />{" "}
        {/* Rendering a product image slider */}
        <Details product={product} /> {/* Rendering product details */}
      </div>
    </div>
  );
};
