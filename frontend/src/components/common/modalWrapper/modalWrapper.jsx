import React from "react";
import NewHabitModal from "../../newHabitModal/newHabitModal";
import NewIdentityModal from "../../newIdentityModal/newIdentityModal";
import styles from "./modalWrapper.module.css";

const ModalWrapper = ({ modalType, closeModal }) => (
  <div className={styles.container}>
    {modalType === "habit" && <NewHabitModal closeModal={closeModal} />}
    {modalType === "identity" && <NewIdentityModal closeModal={closeModal} />}
  </div>
);

export default ModalWrapper;
