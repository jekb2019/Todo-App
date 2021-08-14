import React from "react";
import styles from "./habitDetailModal.module.css";

const HabitDetailModal = (props) => (
  <div className={styles.container}>
    <h1 className={styles.title}>Study Coding</h1>
    <span className={styles.identity}>My Identity</span>
    <div className={styles.content}>
      <p className={styles.description}>Some description will go in here</p>
    </div>
    <div className={styles.buttons}>
      <button>OK</button>
      <button>Delete</button>
    </div>
  </div>
);

export default HabitDetailModal;
