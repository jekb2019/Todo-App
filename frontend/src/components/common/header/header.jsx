import styles from "./header.module.css";
import React from "react";
import Button from "../button/button";

const Header = (props) => (
  <div className={styles.container}>
    <h1 className={styles.title}>Atomic Habits</h1>
    <Button />
  </div>
);

export default Header;
