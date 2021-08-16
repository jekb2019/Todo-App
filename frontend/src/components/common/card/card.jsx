import React from "react";
import styles from "./card.module.css";

const Card = ({ id, title, openModal, type }) => {
  const openDetailModal = () => {
    if (type === "habit") {
      openModal("habit_detail", id);
    } else if (type === "identity") {
      openModal("identity_detail", id);
    }
  };

  return (
    <div onClick={openDetailModal} className={styles.container}>
      <span className={styles.title}>{title}</span>
    </div>
  );
};

export default Card;
