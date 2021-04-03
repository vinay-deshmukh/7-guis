import React from "react";
import PropTypes from "prop-types";
import cx from "classnames";
import styles from "./Button.module.scss";

function Button({ className = "", children, ...restProps }) {
  return (
    <button className={cx(styles.button, className)} {...restProps}>
      {children}
    </button>
  );
}

Button.propTypes = {
  className: PropTypes.string,
  children: PropTypes.string.isRequired,
};

export default Button;
