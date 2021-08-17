// TODO(Jason): Remove mock data
import { habits } from "../mock/mockData";

class HabitService {
  constructor() {
    this.addNewHabit = this.addNewHabit.bind(this);
  }

  maxHabitNum = 30;

  // TODO(Jason): This function currently just return 0
  async getHabitNum() {
    return 0;
  }

  async getAllHabits() {
    return habits;
  }

  async getHabitWithId(id) {
    return habits.find((habit) => habit.id === id);
  }

  async addNewHabit(habit) {
    // Get current number of habits in DB
    const currentHabitNum = await this.getHabitNum();
    if (currentHabitNum >= this.maxHabitNum) {
      throw new Error("Too many habits");
    }
    const { name, description, identity } = habit;
    console.log(
      `[habitService]: Add Habit - ${name} ${description} ${identity}`
    );
  }

  async deleteHabit(id) {
    console.log(`[habitService]: Habit with id{${id}} deleted`);
  }
}

export default HabitService;
