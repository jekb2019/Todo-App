import React from "react";
import styles from "./button.module.css";
// import { FontAwesomeIcon } from "@fortawesome/fontawesome-svg-core";
// import { far, faSmile } from "@fortawesome/free-solid-svg-icons";
import { faSmile } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Button = (props) => (
  <div className={styles.container}>
    {/* <i class="fas fa-smile"></i> */}
    <FontAwesomeIcon className={styles.icon} icon={faSmile} />
  </div>
);

export default Button;
