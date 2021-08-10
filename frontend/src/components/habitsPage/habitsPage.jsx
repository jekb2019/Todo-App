import React from "react";
import Card from "../common/card/card";
import Footer from "../common/footer/footer";
import Header from "../common/header/header";
import styles from "./habitsPage.module.css";

const HabitsPage = (props) => (
  <div className={styles.container}>
    <Header />
    <section className={styles.contentBox}>
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
    </section>
    <Footer />
  </div>
);

export default HabitsPage;
