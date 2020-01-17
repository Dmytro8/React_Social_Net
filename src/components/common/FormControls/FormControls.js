import React from "react";

import classes from "./FormControl.module.scss";

export const Input = ({ input, meta, ...props }) => {
  const hasError = meta.touched && meta.error;
  return (
    <div className={hasError ? classes.errorInputs : ""}>
      <div className={classes.formInputs}>
        <input {...input} {...props} />
      </div>
      <span className={classes.withoutError}></span>
      {hasError && <span className={classes.errorComment}>{meta.error}</span>}
    </div>
  );
};

export const Textarea = ({ input, meta, ...props }) => {
  console.log(meta);
  const hasError = meta.submitFailed && meta.dirty === false;
  return (
    <div className={hasError ? classes.errorTextarea : ""}>
      <div className={classes.formTextarea}>
        <textarea {...input} {...props}></textarea>
      </div>

      {hasError && (
        <div>
          <span className={classes.errorWarning}>
            <i class="fas fa-exclamation-circle"></i>
          </span>
          <span className={classes.errorComment}>{meta.error}</span>
        </div>
      )}
    </div>
  );
};
