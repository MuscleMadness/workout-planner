import Excercise from './Excercise';

class WorkoutsByGroup {
  name?: string;
  workouts?: Excercise[];

  constructor(groupName: string, workouts: Excercise[]) {
    this.name = groupName;
    this.workouts = workouts;
  }
}

export default WorkoutsByGroup;
