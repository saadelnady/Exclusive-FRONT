import React from "react";
import { serverUrl } from "../../../../API/API";
import { NavLink } from "react-router-dom";

const SearchResults = ({ products, onProductClick }) => {
  return (
    <div className="position-absolute bg-light col-12 rounded p-3 search-result">
      {products?.map((product, index) => {
        return (
          <NavLink to={`/products/${product._id}`}>
            <div className="d-flex align-items-center justify-content-between py-3">
              <img
                src={`${serverUrl}/${product?.images[0]}`}
                alt=""
                className="rounded-pill object-fit-cover search-img "
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
