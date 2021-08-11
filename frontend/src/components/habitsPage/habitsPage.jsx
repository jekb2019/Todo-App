import React from "react";
import Card from "../common/card/card";
import Footer from "../common/footer/footer";
import Header from "../common/header/header";
import styles from "./habitsPage.module.css";

const HabitsPage = (props) => (
  <article className={styles.container}>
    <Header title="Atomic Habits" />
    <section className={styles.contentBox}>
      <Card title="Something to describe my habit" />
      <Card title="Something to describe my habit" />
      <Card title="Something to describe my habit" />
      <Card title="Something to describe" />
      <Card title="Something to describe" />
      <Card title="Something to describe" />
      <Card title="Something to describe" />
      <Card title="Something to describe" />
      <Card title="Something to describe" />
    </section>
    <Footer description="You are whoever you wish to be" />
  </article>
);

export default HabitsPage;
