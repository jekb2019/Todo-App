import React, { useContext } from "react";
import { CloseModalContext } from "../../../context/modalContext";
import styles from "./modalWrapper.module.css";

const ModalWrapper = ({ children }) => {
  const closeModal = useContext(CloseModalContext);
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
