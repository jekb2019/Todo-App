import React from "react";
import NewHabitModal from "../../newHabitModal/newHabitModal";
import NewIdentityModal from "../../newIdentityModal/newIdentityModal";
import styles from "./modalWrapper.module.css";

const ModalWrapper = (props) => (
  <div className={styles.container}>
    {/* <NewHabitModal /> */}
    <NewIdentityModal />
  </div>
);

export default ModalWrapper;
