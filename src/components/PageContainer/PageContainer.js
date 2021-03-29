import React from "react";
import PropTypes from "prop-types";
import styles from "./PageContainer.module.scss";

function PageContainer(props) {
  const { children } = props;
  return <article className={styles.pageContainer}>{children}</article>;
}

PageContainer.propTypes = {
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.arrayOf(PropTypes.node)])
    .isRequired,
};

export default PageContainer;
