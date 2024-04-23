import { useState } from "react";
import { CiSearch } from "react-icons/ci";

import "./styles/Search.css";
import SearchResults from "../User/Shared/Header/SearchResults";
import { useSelector } from "react-redux";

const Search = ({ action }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const { searchedProducts } = useSelector((state) => state.productReducer);
  const [isFocused, setIsFocused] = useState(false); // Track input focus

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);

    setTimeout(() => {
      if (action) {
        action(searchTerm);
      }
    }, 500);
  };
  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    setIsFocused(false);
  };
  return (
    <div className="search-wrapper position-relative col-12 col-lg-5 my-2 my-lg-0 ">
      <input
        type="text"
        className="form-control bg-light special-input"
        placeholder="what are you looking for ?"
        onChange={handleSearch}
        value={searchTerm}
        onFocus={handleFocus}
        onBlur={handleBlur}
      />
      <CiSearch className="bi bi-search position-absolute top-50 fs-5 fw-bold end translate-middle" />
      {isFocused && searchedProducts && searchedProducts.length > 0 ? (
        <SearchResults products={searchedProducts} />
      ) : null}
    </div>
  );
};
export default Search;
