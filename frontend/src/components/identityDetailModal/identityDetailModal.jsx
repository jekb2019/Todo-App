import React from "react";
import Details from "../common/details/details";
import styles from "./identityDetailModal.module.css";

const IdentityDetailModal = ({ currentCard, deleteCard }) => {
  return (
    <div className={styles.container}>
      <Details
        type="identity"
        currentCard={currentCard}
        deleteCard={deleteCard}
      />
    </div>
  );
};

export default IdentityDetailModal;
