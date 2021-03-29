import React from "react";
import PropTypes from "prop-types";

function PageTitle(props) {
  const { children } = props;
  return <h2>{children}</h2>;
}

PageTitle.propTypes = {
  children: PropTypes.string.isRequired,
};

export default PageTitle;
