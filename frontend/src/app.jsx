import styles from "./app.module.css";
import HabitsPage from "./components/habitsPage/habitsPage";
import IdentitiesPage from "./components/identitiesPage/identitiesPage";
import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className={styles.app}>
        <Switch>
          <Route path="/identities">
            <IdentitiesPage />
          </Route>
          <Route path={["/", "/habits"]}>
            <HabitsPage />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
