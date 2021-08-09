import React from "react";
import Footer from "../common/footer/footer";
import Header from "../common/header/header";
import styles from "./habitsPage.module.css";

const HabitsPage = (props) => (
  <div className={styles.container}>
    <Header />
    <section className={styles.contentBox}>
      <h1>Habits Page</h1>
    </section>
    <Footer />
  </div>
);

export default HabitsPage;
