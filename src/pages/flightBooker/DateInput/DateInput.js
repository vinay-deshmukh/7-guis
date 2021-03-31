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
        styles.dateInput,
        {
          [styles.invalidDate]: !isValidDate(restProps.value),
        },
        className
      )}
    />
  );
}

export const DATE_REGEX = /^(?<day>\d{2})\.(?<month>\d{2})\.(?<year>\d{4})$/;
export function isValidDate(text) {
  return DATE_REGEX.test(text);
}
export function getNumberFromDate(validDate) {
  if (!isValidDate(validDate)) {
    throw new Error("ill formatted date");
  }
  const {
    groups: { day, month, year },
  } = validDate.match(DATE_REGEX);

  return +year * 1e4 + +month * 1e2 + +day;
}

DateInput.propTypes = {
  className: PropTypes.string,
};

export default DateInput;
