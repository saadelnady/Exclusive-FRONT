import { NavLink } from "react-router-dom";

const Links = ({ product }) => {
  return (
    <div className="links py-5 fs-6 ">
      <NavLink className="fs-5">{product?.category?.title}</NavLink> /
      <NavLink className="fs-5"> {product?.subCategory?.title}</NavLink> /
      <NavLink className="text-dark fs-5 ms-2">{product?.title}</NavLink>
    </div>
  );
};

export default Links;
