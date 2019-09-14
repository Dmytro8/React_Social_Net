import React from "react";
import { Link } from "react-router-dom";

import logo from "../../static/images/logo.png";
import "./Header.scss";

export const Header = () => {
  return (
    <header className="header">
      <Link to="/">
        <img src={logo} alt="logo img" />
      </Link>
    </header>
  );
};
