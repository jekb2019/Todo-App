import React from "react";
import styles from "./routeButton.module.css";
// import { far, faSmile } from "@fortawesome/free-solid-svg-icons";
import { faSmile, faCheckSquare } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

let buttonIcon;
const identitiesRouteIcon = (
  <FontAwesomeIcon className={styles.icon} icon={faSmile} />
);
const habitsRouteIcon = (
  <FontAwesomeIcon className={styles.icon} icon={faCheckSquare} />
);

const RouteButton = ({ currentPage }) => {
  switch (currentPage) {
    case "identities":
      buttonIcon = habitsRouteIcon;
      break;
    case "habits":
      buttonIcon = identitiesRouteIcon;
      break;
    default:
      buttonIcon = identitiesRouteIcon;
  }

  return <button className={styles.container}>{buttonIcon}</button>;
};

export default RouteButton;
