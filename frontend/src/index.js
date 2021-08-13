import React from "react";
import ReactDOM from "react-dom";
import "./index.module.css";
import App from "./app";
import HabitService from "./services/habitService/habitService";
import IdentityService from "./services/identityService/identityService";

const habitService = new HabitService();
const identityService = new IdentityService();

ReactDOM.render(
  <React.StrictMode>
    <App habitService={habitService} identityService={identityService} />
  </React.StrictMode>,
  document.getElementById("root")
);
