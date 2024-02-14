import { useState } from "react";
import { CiSearch } from "react-icons/ci";

import "./styles/Search.css";
import { useDispatch } from "react-redux";
import { fetchCategories } from "../../store/actions/category/categoryActions";

export const Search = ({ data, setSearchResult }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const dispatch = useDispatch();
  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
    // You need to filter categories here based on search term
    // const filteredData = data.filter((item) => {
    //   return item.title.toLowerCase().includes(e.target.value.toLowerCase());
    // });

    // setSearchResult(filteredData);
    setTimeout(() => {
      const filteredData = dispatch(
        fetchCategories({ limit: 10, page: 1, text: searchTerm })
      );
      setSearchResult(filteredData);
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
        onBlur={() => {
          setSearchResult([]);
        }}
      />
      <CiSearch className="bi bi-search position-absolute top-50 fs-5 fw-bold end translate-middle" />
    </div>
  );
};
