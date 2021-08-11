import React from "react";
import Card from "../common/card/card";
import Footer from "../common/footer/footer";
import Header from "../common/header/header";
import styles from "./habitsPage.module.css";
// TODO(Jason): Remove Mock Data
import { habits } from "../../mock/mockData";

const HabitsPage = (props) => (
  <article className={styles.container}>
    <Header currentPage="habits" />
    <section className={styles.contentBox}>
      {habits.map((habit) => (
        <Card title={habit.name} />
      ))}
    </section>
    <Footer description="You are whoever you wish to be" />
  </article>
);

export default HabitsPage;
