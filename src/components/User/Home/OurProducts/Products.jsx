import Card from "../../../Shared/Card";

const Products = ({ products, handleTargetProduct, handleActiveModal }) => {
  return (
    products &&
    products?.length > 0 && (
      <div className="d-flex flex-wrap justify-content-center justify-content-md-between">
        {products &&
          products.length > 0 &&
          products.map((product) => (
            <Card
              key={product._id}
              product={product}
              handleTargetProduct={handleTargetProduct}
              handleActiveModal={handleActiveModal}
            />
          ))}
      </div>
    )
  );
};

export default Products;
