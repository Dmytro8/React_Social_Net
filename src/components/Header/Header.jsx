import React from "react";
import { Link, NavLink } from "react-router-dom";

import logo from "../../static/images/logo.png";
import "./Header.scss";
import { PROFILE } from "../../constants/url";

export const Header = () => {
  return (
    <header className="header">
      <Link to="/">
        {/* <NavLink to={PROFILE}> */}
        <img src={logo} alt="logo img" />
        {/* </NavLink> */}
      </Link>
    </header>
  );
};
