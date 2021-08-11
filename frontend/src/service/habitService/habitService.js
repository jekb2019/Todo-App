// TODO(Jason): Remove mock data
import { habits } from "../mock/mockData";

class HabitService {
  getAllHabits() {
    return habits;
  }
}

export default HabitService;
