import React from "react";
import styles from "./newIdentityModal.module.css";
import AddNewForm from "../common/addNewForm/addNewForm";
import CloseButton from "../closeButton/closeButton";

const NewIdentityModal = ({ closeModal, addNewIdentity }) => {
  return (
    <article className={styles.container}>
      <CloseButton closeModal={closeModal} />
      <div className={styles.contentWrapper}>
        <h2 className={styles.title}>Add New Identity</h2>
        <AddNewForm
          type="identity"
          submitHandler={addNewIdentity}
          // TODO(Jason): use Context for closeModal prop
          closeModal={closeModal}
        />
        <button className={styles.addButton} form="addIdentityForm">
          Add
        </button>
      </div>
    </article>
  );
};

export default NewIdentityModal;
