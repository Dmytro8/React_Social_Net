import React from "react";

import { makeStyles } from "@material-ui/core/styles";
import CircularProgress from "@material-ui/core/CircularProgress";
import lightBlue from "@material-ui/core/colors/lightBlue";

const useStyles = makeStyles(theme => ({
  spinner: {
    color: lightBlue[500]
  }
}));

export const Preloader = () => {
  const spinnerStyles = useStyles();
  return (
    <div>
      <CircularProgress
        className={spinnerStyles.spinner}
        // width={50}
        // height={50}
      />
    </div>
  );
};
