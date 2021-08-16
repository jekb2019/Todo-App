import styles from "./app.module.css";
import HabitsPage from "./components/habitsPage/habitsPage";
import IdentitiesPage from "./components/identitiesPage/identitiesPage";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ModalWrapper from "./components/common/modalWrapper/modalWrapper";
import { useState } from "react";

function App({ habitService, identityService }) {
  const MODAL_TYPE_ADD_HABIT = "habit";
  const MODAL_TYPE_ADD_IDENTITY = "identity";

  const MODAL_TYPE_HABIT_DETAIL = "habit_detail";
  const MODAL_TYPE_IDENTITY_DETAIL = "identity_detail";

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalType, setModalType] = useState(null);

  const openModal = (modalType) => {
    if (modalType === MODAL_TYPE_ADD_HABIT) {
      setModalType(MODAL_TYPE_ADD_HABIT);
      setIsModalOpen(true);
    } else if (modalType === MODAL_TYPE_ADD_IDENTITY) {
      setModalType(MODAL_TYPE_ADD_IDENTITY);
      setIsModalOpen(true);
    } else if (modalType === MODAL_TYPE_HABIT_DETAIL) {
      setModalType(MODAL_TYPE_HABIT_DETAIL);
      setIsModalOpen(true);
    } else if (modalType === MODAL_TYPE_IDENTITY_DETAIL) {
      setModalType(MODAL_TYPE_IDENTITY_DETAIL);
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
              openModal={openModal}
            />
          </Route>
          <Route path={["/", "/habits"]}>
            <HabitsPage habitService={habitService} openModal={openModal} />
          </Route>
        </Switch>
      </Router>
      {isModalOpen && modalType && (
        <ModalWrapper
          modalType={modalType}
          closeModal={closeModal}
          addNewHabit={habitService.addNewHabit}
          addNewIdentity={identityService.addNewIdentity}
        />
      )}
    </div>
  );
}

export default App;
