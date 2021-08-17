import React, { useContext } from "react";
import { CloseModalContext } from "../../context/modalContext";
import styles from "./closeButton.module.css";

const CloseButton = () => {
  const closeModal = useContext(CloseModalContext);
  return (
    <button onClick={closeModal} className={styles.closeButton}>
      X
    </button>
  );
};

export default CloseButton;
