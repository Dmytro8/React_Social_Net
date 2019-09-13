import React from "react";
import logo from "../../static/images/logo.png";
import "./Header.scss";

export const Header = () => {
  return (
    <header className="header">
      <img src={logo} alt="logo img" />
    </header>
  );
};
