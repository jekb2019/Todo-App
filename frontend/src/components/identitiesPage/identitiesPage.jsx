import React from "react";
import styles from "./identitiesPage.module.css";
import Footer from "../common/footer/footer";
import Header from "../common/header/header";

const IdentitiesPage = (props) => (
  <div className={styles.container}>
    <Header />
    <section className={styles.contentBox}>
      <h1>Identity Page</h1>
    </section>
    <Footer />
  </div>
);

export default IdentitiesPage;
