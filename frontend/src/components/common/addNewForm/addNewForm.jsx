import React from "react";
import styles from "./addNewForm.module.css";
import {
  validateIdentity,
  validateHabit,
} from "../../../validators/validators";

const AddNewForm = ({ type, submitHandler, closeModal }) => {
  let formName;
  if (type === "habit") {
    formName = "addHabitForm";
  } else if (type === "identity") {
    formName = "addIdentityForm";
  }

  const onSubmit = (e) => {
    e.preventDefault();
    const formElements = e.currentTarget.elements;
    const name = formElements[`${type}Name`].value;
    const description = formElements[`${type}Description`].value;
    const identity =
      type === "habit" ? formElements[`${type}Identity`].value : null;
    const item = {
      name,
      description,
      ...(identity && { identity }),
    };

    try {
      if (type === "habit") {
        validateHabit(item);
      } else if (type === "identity") {
        validateIdentity(item);
      }
    } catch (e) {
      alert(e);
      closeModal();
      return;
    }
    // Add new identity to server
    submitHandler(item).catch((e) => {
      alert(e);
      closeModal();
      return;
    });
    closeModal();
  };

  return (
    <form onSubmit={onSubmit} className={styles.form} id={formName}>
      <div className={styles.field}>
        <label htmlFor="name" className={styles.label}>
          Name
        </label>
        <input
          id={`${type}Name`}
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
          id={`${type}Description`}
          className={`${styles.input} ${styles.inputTextArea}`}
          name="description"
        ></textarea>
      </div>
      {type === "habit" && (
        <div className={styles.field}>
          <label htmlFor="identities" className={styles.label}>
            Identity
          </label>
          <select
            id={`${type}Identity`}
            className={styles.input}
            name="identities"
          >
            {/* TODO: (Jason) make it dynamic */}
            <option value="i1">Identity 1</option>
            <option value="i2">Identity 2</option>
            <option value="i3">Identity 3</option>
            <option value="i4">Identity 4</option>
          </select>
        </div>
      )}
    </form>
  );
};

export default AddNewForm;
