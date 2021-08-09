import styles from "./app.module.css";
import HabitsPage from "./components/habitsPage/habitsPage";
import IdentitiesPage from "./components/identitiesPage/identitiesPage";

function App() {
  return (
    <div className={styles.app}>
      <HabitsPage />
      {/* <IdentitiesPage /> */}
    </div>
  );
}

export default App;
