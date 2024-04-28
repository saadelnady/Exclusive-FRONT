import React from "react";
import { serverUrl } from "../../../../API/API";
import { useNavigate } from "react-router-dom";

const SearchResults = ({ products, handleIsShown }) => {
  const navigate = useNavigate();

  return (
    <ul className="position-absolute bg-light col-12 rounded p-3 search-result">
      {products?.map((product, index) => {
        return (
          <li
            className="d-flex align-items-center justify-content-between py-3 cursor-pointer"
            onClick={() => {
              navigate(`/products/${product._id}`);
              handleIsShown();
            }}
          >
            <img
              src={`${serverUrl}/${product?.images[0]}`}
              alt=""
              className="rounded-pill object-fit-cover search-img "
            />
            <p className="col-8">{product?.title}</p>
          </li>
        );
      })}
    </ul>
  );
};

export default SearchResults;
