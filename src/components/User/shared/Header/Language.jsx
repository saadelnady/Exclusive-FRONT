import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import EnglishImage from "../../../../assets/images/pngs/ic_language_english.png";
import ArabicImage from "../../../../assets/images/svgs/eg.svg";

const Language = () => {
  const [activeLanguage, setActiveLanguage] = useState({
    imgUrl: EnglishImage,
    title: "English",
  });

  const handleLanguageChange = (imgUrl, title) => {
    setActiveLanguage({ imgUrl, title });
  };

  return (
    <div className="dropdown m-0">
      <button
        className="btn outline-none text-light dropdown-toggle d-flex justify-content-between align-items-center"
        type="button"
        data-bs-toggle="dropdown"
        aria-expanded="false"
      >
        <img
          src={activeLanguage.imgUrl}
          alt={activeLanguage.title}
          className="col-3 me-2"
        />
        {activeLanguage.title}
      </button>
      <ul className="dropdown-menu">
        <li>
          <NavLink
            className="dropdown-item bg-transparent text-dark"
            to="/"
            onClick={() => handleLanguageChange(EnglishImage, "English")}
          >
            <img src={EnglishImage} alt="EnglishImage" className="col-3 me-2" />
            English
          </NavLink>
        </li>
        <li>
          <NavLink
            className="dropdown-item bg-transparent text-dark"
            to="/"
            onClick={() => handleLanguageChange(ArabicImage, "Arabic")}
          >
            <img src={ArabicImage} alt="ArabicImage" className="col-3 me-2" />
            Arabic
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Language;
