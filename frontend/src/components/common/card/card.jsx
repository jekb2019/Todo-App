import React from "react";
import styles from "./card.module.css";

const Card = ({ title, openModal, type }) => {
  const openDetailModal = () => {
    if (type === "habit") {
      openModal("habit_detail");
    } else if (type === "identity") {
      openModal("identity_detail");
    }
  };

  return (
    <div onClick={openDetailModal} className={styles.container}>
      <span className={styles.title}>{title}</span>
    </div>
  );
};

export default Card;
