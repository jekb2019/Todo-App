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

  // Default dummy states
  const defaultHabitCard = {
    name: "Habit Name",
    identity: "Related Identity",
    description: "Habit Description",
  };

  const defaultIdentityCard = {
    name: "Best developer",
    description: "The best programmer in the world",
  };

  // States
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalType, setModalType] = useState(null);
  const [currentHabitCard, setCurrentHabitCard] = useState(defaultHabitCard);
  const [currentIdentityCard, setCurrentIdentityCard] =
    useState(defaultIdentityCard);

  // Card controllers
  const setupHabitCard = async (id) => {
    const habit = await habitService.getHabitWithId(id);
    const identity = await identityService.getIdentityWithId(habit.identityId);

    setCurrentHabitCard({
      ...habit,
      identity: identity.name,
      ...(!habit.description && { description: "No description..." }),
    });
  };

  const setupIdentityCard = async (id) => {
    const identity = await identityService.getIdentityWithId(id);
    setCurrentIdentityCard({
      ...identity,
      ...(!identity.description && { description: "No description..." }),
    });
  };

  // Modal controllers
  const openModal = (modalType, cardItemId = null) => {
    if (modalType === MODAL_TYPE_ADD_HABIT) {
      setModalType(MODAL_TYPE_ADD_HABIT);
      setIsModalOpen(true);
    } else if (modalType === MODAL_TYPE_ADD_IDENTITY) {
      setModalType(MODAL_TYPE_ADD_IDENTITY);
      setIsModalOpen(true);
    } else if (modalType === MODAL_TYPE_HABIT_DETAIL) {
      setModalType(MODAL_TYPE_HABIT_DETAIL);
      setupHabitCard(cardItemId);
      setIsModalOpen(true);
    } else if (modalType === MODAL_TYPE_IDENTITY_DETAIL) {
      setModalType(MODAL_TYPE_IDENTITY_DETAIL);
      setupIdentityCard(cardItemId);
      setIsModalOpen(true);
    }
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setModalType(null);
    setCurrentHabitCard(defaultHabitCard);
    setCurrentIdentityCard(defaultIdentityCard);
  };

  const deleteHabit = () => {
    habitService.deleteHabit(currentHabitCard.id);
    closeModal();
  };

  const deleteIdentity = () => {
    identityService.deleteIdentity(currentIdentityCard.id);
    closeModal();
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
            <HabitDetailModal
              closeModal={closeModal}
              currentCard={currentHabitCard}
              deleteCard={deleteHabit}
            />
          )}
          {modalType === MODAL_TYPE_IDENTITY_DETAIL && (
            <IdentityDetailModal
              closeModal={closeModal}
              currentCard={currentIdentityCard}
              deleteCard={deleteIdentity}
            />
          )}
        </ModalWrapper>
      )}
    </div>
  );
}

export default App;
