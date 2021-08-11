import React from "react";
import styles from "./identitiesPage.module.css";
import Footer from "../common/footer/footer";
import Header from "../common/header/header";
import Card from "../common/card/card";
// TODO(Jason): Remove Mock Data
import { identities } from "../../mock/mockData";

const IdentitiesPage = (props) => (
  <article className={styles.container}>
    <Header currentPage="identities" />
    <section className={styles.contentBox}>
      {identities.map((identity) => (
        <Card title={identity.name} />
      ))}
    </section>
    <Footer description="You are whoever you wish to be" />
  </article>
);

export default IdentitiesPage;
