class WorkoutFilter {
  levels: { name: string; isChecked: boolean }[] = [];
  // mechanics: {name: string, isChecked: boolean}[] = [];
  // categories: {name: string, isChecked: boolean}[] = [];
  equipment: { name: string; isChecked: boolean }[] = [];
  primaryMuscles: { name: string; isChecked: boolean }[] = [];
  // secondaryMuscles: {name: string, isChecked: boolean}[] = [];
}

export default WorkoutFilter;
