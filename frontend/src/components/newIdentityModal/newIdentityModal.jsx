import React from "react";
import styles from "./newIdentityModal.module.css";

const NewIdentityModal = ({ closeModal, addNewIdentity }) => {
  const onSubmit = (e) => {
    e.preventDefault();
    const name = e.currentTarget.elements.identityName.value;
    const description = e.currentTarget.elements.identityDescription.value;
    const identity = {
      name,
      description,
    };
    try {
      validateIdentity(identity);
    } catch (e) {
      alert(e);
      closeModal();
      return;
    }
    addNewIdentity(identity).catch((e) => {
      alert(e);
      closeModal();
      return;
    });
  };

  /**
   * Validate user input
   */
  const validateIdentity = (identiity) => {
    const { name, description } = identiity;
    if (name.length < 1 || description < 1) {
      throw new Error("Invalid identiity information");
    }
  };

  return (
    <article className={styles.container}>
      <button onClick={closeModal} className={styles.closeButton}>
        X
      </button>
      <div className={styles.contentWrapper}>
        <h2 className={styles.title}>Add New Identity</h2>
        <form onSubmit={onSubmit} className={styles.form} id="addHabitForm">
          <div className={styles.field}>
            <label htmlFor="name" className={styles.label}>
              Name
            </label>
            <input
              id="identityName"
              className={styles.input}
              type="text"
              name="name"
            ></input>
          </div>
          <div className={styles.field}>
            <label htmlFor="description" className={styles.label}>
              Description
            </label>
            <textarea
              id="identityDescription"
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
};

export default NewIdentityModal;
