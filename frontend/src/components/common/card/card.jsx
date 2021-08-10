import React from "react";
import styles from "./card.module.css";

const Card = (props) => (
  <div className={styles.container}>
    <span className={styles.title}>Something to describe</span>
  </div>
);

export default Card;
