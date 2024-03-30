import { useState } from "react";
import { CiSearch } from "react-icons/ci";

import "./styles/Search.css";

export const Search = ({ action }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);

    setTimeout(() => {
      if (action) {
        action(searchTerm);
      }
    }, 500);
  };

  return (
    <div className="search-wrapper position-relative col-12 col-md-6 col-lg-5 my-2 my-lg-0 ">
      <input
        type="text"
        className="form-control bg-light special-input"
        placeholder="what are you looking for ?"
        onChange={handleSearch}
        value={searchTerm}
      />
      <CiSearch className="bi bi-search position-absolute top-50 fs-5 fw-bold end translate-middle" />
    </div>
  );
};
