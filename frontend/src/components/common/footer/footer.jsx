import styles from "./footer.module.css";

import React from "react";

const Footer = ({ description }) => (
  <footer className={styles.container}>
    <span className={styles.description} data-testid="footerTitle">
      {description}
    </span>
  </footer>
);

export default Footer;
