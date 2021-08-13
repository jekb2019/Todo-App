// TODO(Jason): Remove mock data
import { habits } from "../mock/mockData";

class HabitService {
  maxHabitNum = 30;

  async getAllHabits() {
    return habits;
  }

  async addNewHabit(habit) {
    const { name, description, identity } = habit;
    console.log(
      `[habitService]: Add Habit - ${name} ${description} ${identity}`
    );
  }
}

export default HabitService;
