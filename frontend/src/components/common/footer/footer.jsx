import styles from "./footer.module.css";

import React from "react";

const Footer = ({ description }) => (
  <div className={styles.container}>
    <span className={styles.description}>{description}</span>
  </div>
);

export default Footer;
