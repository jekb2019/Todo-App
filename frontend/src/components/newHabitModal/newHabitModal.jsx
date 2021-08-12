import React from "react";
import styles from "./newHabitModal.module.css";

const NewHabitModal = (props) => (
  <article className={styles.container}>
    <button className={styles.closeButton}>X</button>
    <div className={styles.contentWrapper}>
      <h2 className={styles.title}>Add New Habit</h2>
      <form className={styles.form} id="addHabitForm">
        <div className={styles.field}>
          <label for="name" className={styles.label}>
            Name
          </label>
          <input className={styles.input} type="text" name="name"></input>
        </div>
        <div className={styles.field}>
          <label for="description" className={styles.label}>
            Description
          </label>
          <textarea
            className={`${styles.input} ${styles.inputTextArea}`}
            name="description"
          ></textarea>
        </div>
        <div className={styles.field}>
          <label for="identities" className={styles.label}>
            Identity
          </label>
          <select className={styles.input} name="identities">
            <option value="i1">Identity 1</option>
            <option value="i2">Identity 2</option>
            <option value="i3">Identity 3</option>
            <option value="i4">Identity 4</option>
          </select>
        </div>
      </form>
      <button className={styles.addButton} form="addHabitForm">
        Add
      </button>
    </div>
  </article>
);

export default NewHabitModal;
