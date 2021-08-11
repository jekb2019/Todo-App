import styles from "./footer.module.css";

import React from "react";

const Footer = ({ description }) => (
  <footer className={styles.container}>
    <span className={styles.description}>{description}</span>
  </footer>
);

export default Footer;
