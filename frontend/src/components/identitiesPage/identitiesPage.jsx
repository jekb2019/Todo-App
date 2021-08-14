import React, { useState, useEffect, useCallback } from "react";
import styles from "./identitiesPage.module.css";
import Footer from "../common/footer/footer";
import Header from "../common/header/header";
import Card from "../common/card/card";
import AddNewButton from "../common/addNewButton/addNewButton";

const IdentitiesPage = ({ identityService, openModal }) => {
  const [identities, setIdentities] = useState([]);

  /**
   * Fecth identities from server
   */
  const fetchIdentities = useCallback(async () => {
    const identities = await identityService.getAllIdentities();
    setIdentities(identities);
  }, [identityService]);

  // TODO(Jason): Change to ENUM?
  const openIdentityModal = () => {
    openModal("identity");
  };

  useEffect(() => {
    fetchIdentities();
  }, [identities, fetchIdentities]);

  return (
    <article className={styles.container}>
      <Header currentPage="identities" />
      <section className={styles.contentBox}>
        <AddNewButton openModal={openIdentityModal} />
        {identities.map((identity) => (
          <Card
            key={identity.id}
            type="identity"
            openModal={openModal}
            title={identity.name}
          />
        ))}
      </section>
      <Footer description="You are whoever you wish to be" />
    </article>
  );
};

export default IdentitiesPage;
