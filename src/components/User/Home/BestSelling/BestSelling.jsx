import Products from "../../Shared/ProductsSlider/ProductsSlider";
import SpecialHeading from "../../Shared/SpecialHeading/SpecialHeading";

const BestSelling = () => {
  return (
    <div className="border-bottom py-5 mb-5 overflow-hidden">
      <SpecialHeading
        Heading="This Month"
        SectionTitle="Best Selling Products"
      />
      <Products />
    </div>
  );
};
export default BestSelling;
