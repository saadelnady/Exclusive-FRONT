import { useEffect, useState } from "react";
import { CiSearch } from "react-icons/ci";

import { NavLink } from "react-router-dom";
import "../../styles/Search.css";
import axios from "axios";
import { serverUrl } from "../../API/API";

export const Search = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchData, setSearchData] = useState([]);
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get(`${serverUrl}/api/products`);

        const { products } = await response.data.data;
        setSearchData(products);
      } catch (error) {
        console.log(error);
      }
    };

    fetchProducts();
  }, []);
  const searchHandler = (e) => {
    setSearchTerm(e.target.value);
    if (searchData) {
      const filteredProducts = searchData.filter((product) => {
        return product.productName
          .toLowerCase()
          .includes(e.target.value.toLowerCase());
      });
      setSearchData(filteredProducts);
    }
  };

  const handleBlur = () => {
    setSearchData([]);
  };

  return (
    <div className="search position-relative col-12 col-lg-5 my-2 mt-lg-0">
      <input
        type="text"
        className="form-control bg-light search"
        placeholder="what are you looking for ?"
        value={searchTerm}
        onChange={searchHandler}
        onBlur={handleBlur}
      />
      <CiSearch className="bi bi-search position-absolute top-50 fs-5 fw-bold end translate-middle" />

      {searchData || searchData.length !== 0 || searchTerm !== "" ? (
        <ul className="position-absolute bg-dark search-result w-100 ">
          {searchData.map((product, index) => {
            return (
              <li key={index} className="p-3">
                <NavLink
                  className="d-flex justify-content-between align-items-center"
                  to={`/products/${product._id}`}
                >
                  <img
                    src={product.productImage}
                    alt="product-img"
                    className="search-img"
                  />
                  <p className="text-light">{product.productName}</p>
                </NavLink>
              </li>
            );
          })}
        </ul>
      ) : null}
    </div>
  );
};
