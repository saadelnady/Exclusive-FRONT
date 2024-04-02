import SpecialHeading from "../../Shared/SpecialHeading/SpecialHeading";
import BestSellingProducts from "./BestSellingProducts";

const BestSelling = () => {
  return (
    <div className="border-bottom py-5 mb-5 overflow-hidden">
      <SpecialHeading
        Heading="This Month"
        SectionTitle="Best Selling Products"
      />
      <BestSellingProducts />
    </div>
  );
};
export default BestSelling;
