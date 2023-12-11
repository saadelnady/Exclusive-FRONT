import { useState } from "react";
import { CiSearch } from "react-icons/ci";
import { products } from "../../static/data";
import { NavLink } from "react-router-dom";
import "../../styles/Search.css";
import product1 from "../../static/images/1.png";

export const Search = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchData, setSearchData] = useState(null);

  const searchHandler = (e) => {
    setSearchTerm(e.target.value);

    const filteredProducts = products.filter((product) => {
      return product.name.toLowerCase().includes(e.target.value.toLowerCase());
    });
    console.log(filteredProducts);
    setSearchData(filteredProducts);
  };
  return (
    <div className="search position-relative col-12 col-lg-5 my-2 mt-lg-0">
      <input
        type="text"
        className="form-control bg-light search"
        placeholder="what are you looking for ?"
        value={searchTerm}
        onChange={searchHandler}
      />
      <CiSearch className="bi bi-search position-absolute top-50 fs-5 fw-bold end translate-middle" />
      {searchData && searchData.length !== 0 ? (
        <ul className="position-absolute bg-dark search-result w-100 ">
          {searchData.map((product, index) => {
            return (
              <li key={index} className="p-3">
                <NavLink
                  className="d-flex justify-content-between align-items-center"
                  to={`/product/${product.id}`}
                >
                  <img
                    src={product1}
                    alt="product-img"
                    className="search-img"
                  />
                  <p className="text-light">{product.name}</p>
                </NavLink>
              </li>
            );
          })}
        </ul>
      ) : null}
    </div>
  );
};
