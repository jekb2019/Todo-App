import React from "react";
import styles from "./addNewButton.module.css";

const AddNewButton = ({ openModal }) => {
  return (
    <button
      data-testid="addNewButton"
      onClick={openModal}
      className={styles.container}
    >
      <span className={styles.icon}>+</span>
    </button>
  );
};

export default AddNewButton;
