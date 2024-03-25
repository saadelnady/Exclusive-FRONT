import Card from "../../shared/Card";

const BestSelling = () => {
  return (
    <div className="border-bottom py-5 mb-5 overflow-hidden">
      <h5 className="special-header ps-5 py-2 mb-5">This Month</h5>
      <div className=" d-flex justify-content-between flex-wrap align-items-center mb-5">
        <h1 className="fw-bold text-center text-md-start">
          Best Selling Products
        </h1>
        <button className="btn submit py-3 px-5">View All</button>
      </div>
      <div className="d-flex justify-content-between  align-items-center ">
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
};
export default BestSelling;
