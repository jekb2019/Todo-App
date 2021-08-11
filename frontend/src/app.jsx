import styles from "./app.module.css";
import HabitsPage from "./components/habitsPage/habitsPage";
import IdentitiesPage from "./components/identitiesPage/identitiesPage";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App({ habitService, identityService }) {
  return (
    <Router>
      <div className={styles.app}>
        <Switch>
          <Route path="/identities">
            <IdentitiesPage identityService={identityService} />
          </Route>
          <Route path={["/", "/habits"]}>
            <HabitsPage habitService={habitService} />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
