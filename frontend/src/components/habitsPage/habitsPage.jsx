import React, { useEffect, useState, useCallback } from "react";
import AddNewButton from "../common/addNewButton/addNewButton";
import Card from "../common/card/card";
import Footer from "../common/footer/footer";
import Header from "../common/header/header";
import styles from "./habitsPage.module.css";

const HabitsPage = ({ habitService, openModal }) => {
  const [habits, setHabits] = useState([]);

  /**
   * Fetch habits from server
   */
  const fetchHabits = useCallback(async () => {
    const habits = await habitService.getAllHabits();
    setHabits(habits);
  }, [habitService]);

  // TODO(Jason): Change to ENUM?
  const openHabitModal = () => {
    openModal("habit");
  };

  useEffect(() => {
    fetchHabits();
  }, [habits, fetchHabits]);

  return (
    <article className={styles.container}>
      <Header currentPage="habits" />
      <section className={styles.contentBox}>
        <AddNewButton openModal={openHabitModal} />
        {habits.map((habit) => {
          return (
            <Card
              key={habit.id}
              type="habit"
              openModal={openModal}
              title={habit.name}
            />
          );
        })}
      </section>
      <Footer description="You are whoever you wish to be" />
    </article>
  );
};

export default HabitsPage;
