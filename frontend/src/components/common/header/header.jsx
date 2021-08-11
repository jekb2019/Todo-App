import { Link } from "react-router-dom";
import styles from "./header.module.css";
import React from "react";
import RouteButton from "../routeButton/routeButton";

const Header = ({ currentPage }) => {
  let pageRoute;
  let title;

  switch (currentPage) {
    case "identities":
      pageRoute = "habits";
      title = "Who I Am";
      break;
    case "habits":
      pageRoute = "identities";
      title = "Atomic Habits";
      break;
    default:
      pageRoute = "identities";
      title = "Atomic Habits";
  }

  return (
    <header className={styles.container}>
      <h1 className={styles.title}>{title}</h1>
      <Link className={styles.button} to={`/${pageRoute}`}>
        <RouteButton currentPage={currentPage} />
      </Link>
    </header>
  );
};

export default Header;
