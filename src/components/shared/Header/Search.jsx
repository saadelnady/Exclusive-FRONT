import { CiSearch } from "react-icons/ci";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

import "../../../styles/Search.css";
import { fetchProducts } from "../../../store/actions/productActions";

export const Search = () => {
  const { products } = useSelector((state) => state.productReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  const [searchTerm, setSearchTerm] = useState("");
  const [searchResult, setSearchResult] = useState([]);
  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
    const filteredProducts = products.filter((product) => {
      return product.productName
        .toLowerCase()
        .includes(e.target.value.toLowerCase());
    });
    setSearchResult(filteredProducts);
  };

  return (
    <div className="search position-relative col-12 col-lg-5 my-2 my-lg-0">
      <input
        type="text"
        className="form-control bg-light search"
        placeholder="what are you looking for ?"
        onChange={handleSearch}
        value={searchTerm}
      />
      <CiSearch className="bi bi-search position-absolute top-50 fs-5 fw-bold end translate-middle" />
      {searchResult && searchResult.length !== 0 ? (
        <div className="search-result position-absolute w-100 bg-dark rounded ">
          {searchResult.map((product, index) => {
            return (
              <NavLink
                key={index}
                to={`/product/${product._id}`}
                className="d-flex justify-content-between align-items-center text-light mb-2 p-3"
              >
                <img
                  src={product.productImage}
                  alt=""
                  className="search-img rounded"
                />
                <p>{product.productName}</p>
              </NavLink>
            );
          })}
        </div>
      ) : null}
    </div>
  );
};
