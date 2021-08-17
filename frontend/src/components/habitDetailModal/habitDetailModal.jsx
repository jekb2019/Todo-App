import React from "react";
import styles from "./habitDetailModal.module.css";

const HabitDetailModal = ({ currentCard, closeModal, deleteCard }) => {
  const { name, identity, description } = currentCard;
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>{name}</h1>
      <span className={styles.identity}>{identity}</span>
      <div className={styles.content}>
        <p className={styles.description}>{description}</p>
      </div>
      <div className={styles.buttons}>
        <button onClick={closeModal}>OK</button>
        <button onClick={deleteCard}>Delete</button>
      </div>
    </div>
  );
};

export default HabitDetailModal;
