import styles from "./app.module.css";
import HabitsPage from "./components/habitsPage/habitsPage";
import IdentitiesPage from "./components/identitiesPage/identitiesPage";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ModalWrapper from "./components/common/modalWrapper/modalWrapper";
import { useState } from "react";
import NewHabitModal from "./components/newHabitModal/newHabitModal";
import NewIdentityModal from "./components/newIdentityModal/newIdentityModal";
import HabitDetailModal from "./components/habitDetailModal/habitDetailModal";
import IdentityDetailModal from "./components/identityDetailModal/identityDetailModal";

function App({ habitService, identityService }) {
  // Modal Types
  const MODAL_TYPE_ADD_HABIT = "habit";
  const MODAL_TYPE_ADD_IDENTITY = "identity";
  const MODAL_TYPE_HABIT_DETAIL = "habit_detail";
  const MODAL_TYPE_IDENTITY_DETAIL = "identity_detail";

  // States
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalType, setModalType] = useState(null);

  // Controllers
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
      {isModalOpen && (
        <ModalWrapper closeModal={closeModal}>
          {modalType === MODAL_TYPE_ADD_HABIT && (
            <NewHabitModal
              closeModal={closeModal}
              addNewHabit={habitService.addNewHabit}
            />
          )}
          {modalType === MODAL_TYPE_ADD_IDENTITY && (
            <NewIdentityModal
              closeModal={closeModal}
              addNewIdentity={identityService.addNewIdentity}
            />
          )}
          {modalType === MODAL_TYPE_HABIT_DETAIL && (
            <HabitDetailModal closeModal={closeModal} />
          )}
          {modalType === MODAL_TYPE_IDENTITY_DETAIL && (
            <IdentityDetailModal closeModal={closeModal} />
          )}
        </ModalWrapper>
      )}
    </div>
  );
}

export default App;
