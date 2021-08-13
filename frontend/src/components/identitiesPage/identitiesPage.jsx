import React, { useState, useEffect } from "react";
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
  const fetchIdentities = async () => {
    const identities = await identityService.getAllIdentities();
    setIdentities(identities);
  };

  useEffect(() => {
    fetchIdentities();
  }, [identities]);

  return (
    <article className={styles.container}>
      <Header currentPage="identities" />
      <section className={styles.contentBox}>
        <AddNewButton openModal={openModal} />
        {identities.map((identity) => (
          <Card key={identity.id} title={identity.name} />
        ))}
      </section>
      <Footer description="You are whoever you wish to be" />
    </article>
  );
};

export default IdentitiesPage;
