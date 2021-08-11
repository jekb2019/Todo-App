import React from "react";
import Card from "../common/card/card";
import Footer from "../common/footer/footer";
import Header from "../common/header/header";
import styles from "./habitsPage.module.css";

const HabitsPage = ({ habitService }) => (
  <article className={styles.container}>
    <Header currentPage="habits" />
    <section className={styles.contentBox}>
      {habitService.getAllHabits().map((habit) => (
        <Card key={habit.id} title={habit.name} />
      ))}
    </section>
    <Footer description="You are whoever you wish to be" />
  </article>
);

export default HabitsPage;
