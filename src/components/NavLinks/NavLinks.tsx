import React from "react";
import { Link } from "react-router-dom";
import "./NavLinks.scss";

export const NavLinks = () => {
  return (
    <nav className="nav">
      <ul>
        <li>
          {/* eslint-disable-next-line */}
          <Link to="/">Profile</Link>
        </li>
        <li>
          {/* eslint-disable-next-line */}
          <Link to="/messages">Messages</Link>
        </li>
        <li>
          {/* eslint-disable-next-line */}
          <Link to="/news">News</Link>
        </li>
        <li>
          {/* eslint-disable-next-line */}
          <Link to="/music">Music</Link>
        </li>
        <li>
          {/* eslint-disable-next-line */}
          <Link to="/settings">Settings</Link>
        </li>
      </ul>
    </nav>
  );
};
