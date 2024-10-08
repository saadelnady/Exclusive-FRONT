import { NavLink } from "react-router-dom";

const Links = () => {
  return (
    <div className="mb-5 links">
      <NavLink to={"/"} className="fs-5 me-2">
        Home
      </NavLink>
      /
      <NavLink to={"/cart"} className="text-dark fs-5 ms-2">
        Cart
      </NavLink>
    </div>
  );
};

export default Links;
