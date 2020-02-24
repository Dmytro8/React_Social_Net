import React from "react";

import classes from "./NavBar.module.scss";
import NavLinks from "../NavLinks";

export const NavBar = () => {
  return (
    <div className={classes.navbar}>
      <NavLinks />
    </div>
  );
};
