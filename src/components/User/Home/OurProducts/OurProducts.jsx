import Card from "../../../Shared/Card";
import SpecialHeading from "../../Shared/SpecialHeading/SpecialHeading";

const OurProducts = ({ products }) => {
  return (
    <div className="border-bottom py-5 mb-5">
      <SpecialHeading
        Heading="Our Products"
        SectionTitle="Explore Our Products"
      />

      <div className="d-flex justify-content-center justify-content-md-between  flex-wrap">
        {products?.map((product, index) => {
          return <Card key={index} product={product} />;
        })}
      </div>
      <div className="text-center">
        <button className="btn submit py-3 px-5 fs-6">View All Products</button>
      </div>
    </div>
  );
};
export default OurProducts;
