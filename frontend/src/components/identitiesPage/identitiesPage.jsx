import React from "react";
import styles from "./identitiesPage.module.css";
import Footer from "../common/footer/footer";
import Header from "../common/header/header";
import Card from "../common/card/card";
import AddNewButton from "../common/addNewButton/addNewButton";

const IdentitiesPage = ({ identityService, openModal }) => {
  return (
    <article className={styles.container}>
      <Header currentPage="identities" />
      <section className={styles.contentBox}>
        <AddNewButton openModal={openModal} />
        {identityService.getAllIdentities().map((identity) => (
          <Card key={identity.id} title={identity.name} />
        ))}
      </section>
      <Footer description="You are whoever you wish to be" />
    </article>
  );
};

export default IdentitiesPage;
