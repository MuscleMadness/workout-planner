import Excercise from './Excercise';

class WorkoutsByGroup {
  name?: string;
  expanded: boolean = true;
  workouts?: Excercise[];

  constructor(groupName: string, workouts: Excercise[]) {
    this.name = groupName;
    this.workouts = workouts;
  }
}

export default WorkoutsByGroup;
