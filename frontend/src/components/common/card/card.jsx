import React from "react";
import styles from "./card.module.css";

const Card = ({ title }) => (
  <div className={styles.container}>
    <span className={styles.title}>{title}</span>
  </div>
);

export default Card;
