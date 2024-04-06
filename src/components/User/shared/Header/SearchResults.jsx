import React from "react";
import { serverUrl } from "../../../../API/API";
import { NavLink } from "react-router-dom";

const SearchResults = ({ products }) => {
  return (
    <div className="position-absolute bg-light col-12 rounded zindex-dropdown">
      {products?.map((product, index) => {
        return (
          <NavLink to={`/products/${product._id}`}>
            <div className="d-flex align-items-center justify-content-between py-3">
              <img
                src={`${serverUrl}/${product?.images[0]}`}
                alt=""
                className="rounded-pill col-3 object-fit-cover  "
              />
              <p className="col-8">{product?.title}</p>
            </div>
          </NavLink>
        );
      })}
    </div>
  );
};

export default SearchResults;
