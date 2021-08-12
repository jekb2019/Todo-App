import React from "react";
import NewHabitModal from "../../newHabitModal/newHabitModal";
import styles from "./modalWrapper.module.css";

const ModalWrapper = (props) => (
  <div className={styles.container}>
    <NewHabitModal />
  </div>
);

export default ModalWrapper;
