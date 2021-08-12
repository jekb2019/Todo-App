import styles from "./app.module.css";
import HabitsPage from "./components/habitsPage/habitsPage";
import IdentitiesPage from "./components/identitiesPage/identitiesPage";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ModalWrapper from "./components/common/modalWrapper/modalWrapper";

function App({ habitService, identityService }) {
  return (
    <div className={styles.app}>
      <Router>
        <Switch>
          <Route path="/identities">
            <IdentitiesPage identityService={identityService} />
          </Route>
          <Route path={["/", "/habits"]}>
            <HabitsPage habitService={habitService} />
          </Route>
        </Switch>
      </Router>
      {/* Modal */}
      <ModalWrapper />
    </div>
  );
}

export default App;
