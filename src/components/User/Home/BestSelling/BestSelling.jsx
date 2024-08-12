import SpecialHeading from "../../../Shared/SpecialHeading";
import Products from "../../Shared/ProductsSlider/ProductsSlider";

const BestSelling = () => {
  return (
    <div className="border-bottom py-5 mb-5 overflow-hidden">
      <SpecialHeading title="This Month" SectionTitle="Best Selling Products" />
      <Products />
    </div>
  );
};
export default BestSelling;
