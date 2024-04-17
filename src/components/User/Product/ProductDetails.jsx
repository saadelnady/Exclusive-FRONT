import "./styles/Product.css";
import ProductSlider from "./ProductSlider";
import { useSelector } from "react-redux";

import Links from "./Links";
import Details from "./Details";
import Loading from "../../Shared/Loading";

export const ProductDetails = () => {
  const { product, isLoading } = useSelector((state) => state.productReducer);

  return isLoading ? (
    <Loading />
  ) : (
    <div className="container mb-5">
      <Links product={product} />
      <div className="details row">
        <ProductSlider product={product} />
        <Details product={product} />
      </div>
    </div>
  );
};
