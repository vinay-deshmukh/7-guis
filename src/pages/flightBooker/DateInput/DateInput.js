import React from "react";
import PropTypes from "prop-types";
import cx from "classnames";
import styles from "./DateInput.module.scss";

function DateInput(props) {
  const { className = "", ...restProps } = props;
  return (
    <input
      {...restProps}
      className={cx(
        {
          [styles.invalidDate]: !isValidDate(restProps.value),
        },
        className
      )}
    />
  );
}

function isValidDate(text) {
  return /^\d{2}\.\d{2}\.\d{4}$/.test(text);
}

DateInput.propTypes = {};

export default DateInput;
