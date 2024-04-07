import Card from "../../../Shared/Card";

const Products = ({ products }) => {
  return (
    products &&
    products.length > 0 && (
      <div className="d-flex flex-wrap justify-content-center justify-content-md-between">
        {products &&
          products.length > 0 &&
          products.map((product) => (
            <Card key={product._id} product={product} />
          ))}
      </div>
    )
  );
};

export default Products;
