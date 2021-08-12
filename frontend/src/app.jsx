import styles from "./app.module.css";
import HabitsPage from "./components/habitsPage/habitsPage";
import IdentitiesPage from "./components/identitiesPage/identitiesPage";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ModalWrapper from "./components/common/modalWrapper/modalWrapper";
import { useState } from "react";

function App({ habitService, identityService }) {
  const MODAL_TYPE_HABIT = "habit";
  const MODAL_TYPE_IDENTITY = "identity";

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalType, setModalType] = useState(null);

  const openModal = (modalType) => {
    if (modalType === MODAL_TYPE_HABIT) {
      setModalType(MODAL_TYPE_HABIT);
      setIsModalOpen(true);
    } else if (modalType === MODAL_TYPE_IDENTITY) {
      setModalType(MODAL_TYPE_IDENTITY);
      setIsModalOpen(true);
    }
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setModalType(null);
  };

  return (
    <div className={styles.app}>
      <Router>
        <Switch>
          <Route path="/identities">
            <IdentitiesPage
              identityService={identityService}
              openModal={() => openModal(MODAL_TYPE_IDENTITY)}
            />
          </Route>
          <Route path={["/", "/habits"]}>
            <HabitsPage
              habitService={habitService}
              openModal={() => openModal(MODAL_TYPE_HABIT)}
            />
          </Route>
        </Switch>
      </Router>
      {isModalOpen && modalType === MODAL_TYPE_HABIT && (
        <ModalWrapper modalType={modalType} closeModal={closeModal} />
      )}
      {isModalOpen && modalType === MODAL_TYPE_IDENTITY && (
        <ModalWrapper modalType={modalType} closeModal={closeModal} />
      )}
    </div>
  );
}

export default App;
