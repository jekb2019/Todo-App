import React from "react";
import HabitDetailModal from "../../habitDetailModal/habitDetailModal";
import IdentityDetailModal from "../../identityDetailModal/identityDetailModal";
import NewHabitModal from "../../newHabitModal/newHabitModal";
import NewIdentityModal from "../../newIdentityModal/newIdentityModal";
import styles from "./modalWrapper.module.css";

const ModalWrapper = ({
  modalType,
  closeModal,
  addNewHabit,
  addNewIdentity,
}) => {
  const onBackgroundClickHandler = (e) => {
    if (e.target.id === "modalWrapper") {
      closeModal();
    }
  };

  return (
    <div
      onClick={onBackgroundClickHandler}
      id="modalWrapper"
      className={styles.container}
    >
      {modalType === "habit" && (
        <NewHabitModal closeModal={closeModal} addNewHabit={addNewHabit} />
      )}
      {modalType === "identity" && (
        <NewIdentityModal
          closeModal={closeModal}
          addNewIdentity={addNewIdentity}
        />
      )}
      {modalType === "habit_detail" && (
        <HabitDetailModal closeModal={closeModal} />
      )}
      {modalType === "identity_detail" && (
        <IdentityDetailModal closeModal={closeModal} />
      )}
    </div>
  );
};

export default ModalWrapper;
