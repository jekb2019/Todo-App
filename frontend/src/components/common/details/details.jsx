import React, { useContext } from "react";
import { CloseModalContext } from "../../../context/modalContext";
import styles from "./details.module.css";

const Details = ({ currentCard, deleteCard, type }) => {
  const closeModal = useContext(CloseModalContext);
  const { name, identity, description } = currentCard;
  return (
    <div data-testid="detailsModal">
      <h1 className={styles.title}>{name}</h1>
      {type === "habit" && (
        <span data-testid="relatedIdentity" className={styles.identity}>
          {identity}
        </span>
      )}
      <div className={styles.content}>
        <p className={styles.description}>{description}</p>
      </div>
      <div className={styles.buttons}>
        <button data-testid="okButton" onClick={closeModal}>
          OK
        </button>
        <button onClick={deleteCard}>Delete</button>
      </div>
    </div>
  );
};

export default Details;
