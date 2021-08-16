import React from "react";
import styles from "./closeButton.module.css";

const CloseButton = ({ closeModal }) => (
  <button onClick={closeModal} className={styles.closeButton}>
    X
  </button>
);

export default CloseButton;
