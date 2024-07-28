class WorkoutFilter {
  levels: { name: string; isChecked: boolean }[] = [];
  // mechanics: {name: string, isChecked: boolean}[] = [];
  // categories: {name: string, isChecked: boolean}[] = [];
  equipments: { name: string; isChecked: boolean }[] = [];
  muscleGroups: { name: string; isChecked: boolean }[] = [];
  // secondaryMuscles: {name: string, isChecked: boolean}[] = [];
}

export default WorkoutFilter;
