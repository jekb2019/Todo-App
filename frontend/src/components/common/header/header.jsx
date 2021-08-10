import styles from "./header.module.css";
import React from "react";

const Header = (props) => (
  <div className={styles.container}>
    <h1 className={styles.title}>Atomic Habits</h1>
  </div>
);

export default Header;
