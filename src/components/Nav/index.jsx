// import React from "react";
import { Link, useLocation } from "react-router-dom";

const Nav = () => {
  const location = useLocation();
  const isActive = (path) => location.pathname === path;

  return (
    <nav>
      <ul>
        <li>
          <Link to="/" className={isActive(`/`) ? `active` : ``}>
            Home
          </Link>
        </li>
        <li>
          <Link to="/contact" className={isActive(`/contact`) ? `active` : ``}>
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
