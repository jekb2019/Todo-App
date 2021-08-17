import React from "react";
import Details from "../common/details/details";
import styles from "./habitDetailModal.module.css";

const HabitDetailModal = ({ currentCard, deleteCard }) => {
  return (
    <div className={styles.container}>
      <Details type="habit" currentCard={currentCard} deleteCard={deleteCard} />
    </div>
  );
};

export default HabitDetailModal;
