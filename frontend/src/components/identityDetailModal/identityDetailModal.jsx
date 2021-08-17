import React, { useContext } from "react";
import { CloseModalContext } from "../../context/modalContext";
import styles from "./identityDetailModal.module.css";

const IdentityDetailModal = ({ currentCard, deleteCard }) => {
  const closeModal = useContext(CloseModalContext);
  const { name, description } = currentCard;
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>{name}</h1>
      <div className={styles.content}>
        <p className={styles.description}>{description}</p>
      </div>
      <div className={styles.buttons}>
        <button onClick={closeModal}>OK</button>
        <button onClick={deleteCard}>Delete</button>
      </div>
    </div>
  );
};

export default IdentityDetailModal;
