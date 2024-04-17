import { useState } from "react";
import { useSelector } from "react-redux";
import { NavLink, useLocation } from "react-router-dom";

const Links = () => {
  const { isLoggedIn } = useSelector((state) => state.userReducer);
  const [active, setActive] = useState(null);
  const location = useLocation();

  const handleNavLinkClick = (navItem) => {
    setActive(navItem);
  };

  // Conditionally include "Login" item based on isLoggedIn
  const navItems = [
    { label: "Home", path: "/", key: "home" },
    { label: "Contact", path: "/contact", key: "contact" },
    { label: "About", path: "/about", key: "about" },
    ...(isLoggedIn
      ? []
      : [
          {
            label: "Login",
            path: "/login/user",
            key: "login",
          },
        ]),
  ];

  return (
    <ul className="d-flex links col-12 col-sm-7">
      {navItems.map((item) => (
        <li
          key={item.key}
          className={`fs-5 ${
            active === item.key || location.pathname === item.path
              ? "active"
              : ""
          }`}
          onClick={() => handleNavLinkClick(item.key)}
        >
          <NavLink to={item.path} onClick={() => handleNavLinkClick(item.key)}>
            {item.label}
          </NavLink>
        </li>
      ))}
    </ul>
  );
};

export default Links;
