import React from "react";
import styles from "./newHabitModal.module.css";
import AddNewForm from "../common/addNewForm/addNewForm";
import CloseButton from "../closeButton/closeButton";

const NewHabitModal = ({ addNewHabit }) => {
  return (
    <article className={styles.container}>
      <CloseButton />
      <div className={styles.contentWrapper}>
        <h2 className={styles.title}>Add New Habit</h2>
        <AddNewForm type="habit" submitHandler={addNewHabit} />
        <button className={styles.addButton} form="addHabitForm">
          Add
        </button>
      </div>
    </article>
  );
};

export default NewHabitModal;
