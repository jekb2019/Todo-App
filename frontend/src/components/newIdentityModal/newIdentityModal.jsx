import React from "react";
import styles from "./newIdentityModal.module.css";

const NewIdentityModal = ({ closeModal }) => (
  <article className={styles.container}>
    <button onClick={closeModal} className={styles.closeButton}>
      X
    </button>
    <div className={styles.contentWrapper}>
      <h2 className={styles.title}>Add New Identity</h2>
      <form className={styles.form} id="addHabitForm">
        <div className={styles.field}>
          <label htmlFor="name" className={styles.label}>
            Name
          </label>
          <input className={styles.input} type="text" name="name"></input>
        </div>
        <div className={styles.field}>
          <label htmlFor="description" className={styles.label}>
            Description
          </label>
          <textarea
            className={`${styles.input} ${styles.inputTextArea}`}
            name="description"
          ></textarea>
        </div>
      </form>
      <button className={styles.addButton} form="addHabitForm">
        Add
      </button>
    </div>
  </article>
);

export default NewIdentityModal;
