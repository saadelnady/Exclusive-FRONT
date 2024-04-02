import "../styles/Sale.css";

import FlashSalesProducts from "./FlashSaleProducts";
import SpecialHeading from "../../Shared/SpecialHeading/SpecialHeading";

const FlashSale = () => {
  return (
    <div className="border-bottom py-5 mb-5">
      <SpecialHeading Heading="Today’s" SectionTitle="Flash Sales" />

      <FlashSalesProducts />
      <div className="text-center">
        <button className="btn submit py-3 px-5 fs-6">View All Products</button>
      </div>
    </div>
  );
};
export default FlashSale;
