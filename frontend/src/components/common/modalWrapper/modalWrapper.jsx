import React from "react";
import styles from "./modalWrapper.module.css";

const ModalWrapper = ({ children, closeModal }) => {
  const onBackgroundClickHandler = (e) => {
    if (e.target.id === "modalWrapper") {
      closeModal();
    }
  };

  return (
    <div
      id="modalWrapper"
      className={styles.container}
      onClick={onBackgroundClickHandler}
    >
      {children}
    </div>
  );
};

export default ModalWrapper;
