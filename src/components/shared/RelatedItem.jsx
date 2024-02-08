import { Card } from "./Card";

export const RelatedItem = () => {
  return (
    <div className="container ">
      <h4 className="special-header ps-5 py-2 mb-5">Related Item</h4>
      <div className="row justify-content-center justify-content-md-between">
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
};
