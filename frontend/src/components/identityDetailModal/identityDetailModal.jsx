import React from "react";
import styles from "./identityDetailModal.module.css";

const IdentityDetailModal = (props) => (
  <div className={styles.container}>
    <h1 className={styles.title}>My Identity</h1>
    <div className={styles.content}>
      <p className={styles.description}>Some description will go in here</p>
    </div>
    <div className={styles.buttons}>
      <button>OK</button>
      <button>Delete</button>
    </div>
  </div>
);

export default IdentityDetailModal;
