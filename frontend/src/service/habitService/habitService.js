// TODO(Jason): Remove mock data
import { habits } from "../mock/mockData";

class HabitService {
  maxHabitNum = 30;

  getAllHabits() {
    return habits;
  }
}

export default HabitService;
