import React from "react";

import classes from "./AuthLayout.module.scss";

export class AuthLayout extends React.Component {
  render() {
    return (
      <div className={classes.wrapper}>
        <div className={classes.bgImageWrapper}>
          <img
            src={require("../../static/images/smiles/authPageBack.png")}
            alt="bgSmile"
          />
        </div>
        <div className={classes.formWrapper}>{this.props.children}</div>
      </div>
    );
  }
}
