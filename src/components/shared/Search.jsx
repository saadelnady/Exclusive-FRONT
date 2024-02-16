import { useState } from "react";
import { CiSearch } from "react-icons/ci";

import "./styles/Search.css";
import { useDispatch } from "react-redux";
import { fetchCategories } from "../../store/actions/category/categoryActions";
import { fetchSubCategories } from "../../store/actions/subCategory/subCategoryActions";

export const Search = ({ type }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const dispatch = useDispatch();
  const handleSearch = (e) => {
    setSearchTerm(e.target.value);

    setTimeout(() => {
      if (type === "categories") {
        dispatch(fetchCategories({ limit: 10, page: 1, text: searchTerm }));
      } else if (type === "subCategories") {
        dispatch(fetchSubCategories({ limit: 10, page: 1, text: searchTerm }));
      }
    }, 500);
  };

  return (
    <div className="search-wrapper position-relative col-12 col-lg-4 my-2 my-lg-0">
      <input
        type="text"
        className="form-control bg-light search"
        placeholder="what are you looking for ?"
        onChange={handleSearch}
        value={searchTerm}
      />
      <CiSearch className="bi bi-search position-absolute top-50 fs-5 fw-bold end translate-middle" />
    </div>
  );
};
