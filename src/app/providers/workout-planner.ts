import { Injectable } from '@angular/core';
import Exercise from '../models/Excercise';
import { WorkoutData } from './workout-data';
import { MuscleGroupService } from '../services/muscle-group-service.service';
import { UserData } from './user-data';
import {
  Equipment,
  FitnessLevel,
  FocusArea,
  Goal,
  MuscleGroup,
  Preference,
  WorkoutDay,
  WorkoutPlan,
  WorkoutPlanConfig,
} from '../models/workout-plan';

@Injectable({
  providedIn: 'root',
})
class WorkoutPlanner {
  constructor(
    public workoutData: WorkoutData,
    private userData: UserData,
    private muscleGroupService: MuscleGroupService
  ) {}

  ngOnInit() {
    this.workoutData.loadWorkOuts().subscribe((data: Exercise[]) => {
      console.log('initialized workout data');
    });
  }

  defaultWorkoutConfig(): WorkoutPlanConfig {
    const goal: Goal = 'Build Muscle';
    const fitnessLevel: FitnessLevel = 'intermediate';
    const daysPerWeek = 4;
    const equipment: Equipment[] = ['barbell', 'dumbbell'];
    const focusAreas: FocusArea[] = [
      'chest',
      'legs',
      'back',
      'arms',
      'upper body',
      'core',
    ];
    const duration = 60; // in minutes
    const preferences: Preference[] = ['compound', 'isolation'];
    var workoutConfig: WorkoutPlanConfig = {
      goal,
      fitnessLevel,
      daysPerWeek,
      equipment,
      focusAreas,
      duration,
      preferences,
    };
    return workoutConfig;
  }

  // WorkoutPlan initially will only have the exercise ids
  // This function will fill in the exercise data from the workoutData
  async fillInExcerciseData(workoutPlan : WorkoutPlan) {
    var exercises = this.workoutData.getAllWorkouts();       
    var days: WorkoutDay[]  = []
    workoutPlan.days.forEach((day) => {
      day.exercises = day.exerciseIds.map((id) => exercises.find((ex) => ex.id === id)).filter((ex): ex is Exercise => ex !== undefined);
      days.push(day);
      return day;
    });
    return workoutPlan;

  }

  async getWorkoutConfig(): Promise<WorkoutPlanConfig> {
    var defaultWorkoutConfig = this.defaultWorkoutConfig();
    console.log('Getting workout config');
    var cachedWorkoutConfig = await this.userData.getWorkoutPlan();
    if (cachedWorkoutConfig === null) {
      return defaultWorkoutConfig;
    }
    cachedWorkoutConfig = await this.fillInExcerciseData(cachedWorkoutConfig);

    var workoutConfig: WorkoutPlanConfig = {
      goal: cachedWorkoutConfig.goal ?? defaultWorkoutConfig.goal,
      fitnessLevel:
        cachedWorkoutConfig.fitnessLevel ?? defaultWorkoutConfig.fitnessLevel,
      daysPerWeek:
        cachedWorkoutConfig.daysPerWeek ?? defaultWorkoutConfig.daysPerWeek,
      equipment:
        cachedWorkoutConfig.equipment ?? defaultWorkoutConfig.equipment,
      focusAreas:
        cachedWorkoutConfig.focusAreas ?? defaultWorkoutConfig.focusAreas,
      duration: cachedWorkoutConfig.duration ?? defaultWorkoutConfig.duration,
      preferences:
        cachedWorkoutConfig.preferences ?? defaultWorkoutConfig.preferences,
    };
    return workoutConfig;
  }

  async generateWorkoutPlan(
    workoutConfig: WorkoutPlanConfig
  ): Promise<WorkoutPlan> {
    // Load from cache if there is a previous workout plan for the same parameters
    var cachedWorkoutPlan = await this.userData.getWorkoutPlan();
    if (cachedWorkoutPlan !== null) {
      cachedWorkoutPlan = await this.fillInExcerciseData(cachedWorkoutPlan!);
      return cachedWorkoutPlan;
    }

    // 1. Determine workout split
    const workoutSplit = this.determineSplit(
      workoutConfig.daysPerWeek,
      workoutConfig.goal,
      workoutConfig.preferences
    );

    // 2. Select exercises based on goal, equipment, and focus areas
    const exercises = this.selectExercises(
      workoutConfig.goal,
      workoutConfig.fitnessLevel,
      workoutConfig.equipment,
      workoutConfig.focusAreas,
      workoutConfig.preferences
    );

    // 3. Create the weekly workout schedule
    const workoutSchedule = this.createWorkoutSchedule(
      workoutSplit,
      exercises,
      workoutConfig.fitnessLevel,
      workoutConfig.goal,
      workoutConfig.duration
    );

    // 4. Generate and return the workout plan
    var weeklyPlan = this.generateWeeklyPlan(workoutSchedule);

    // 5. persist the workout plan
    weeklyPlan.goal = workoutConfig.goal;
    weeklyPlan.fitnessLevel = workoutConfig.fitnessLevel;
    weeklyPlan.daysPerWeek = workoutConfig.daysPerWeek;
    weeklyPlan.equipment = workoutConfig.equipment;
    weeklyPlan.focusAreas = workoutConfig.focusAreas;
    weeklyPlan.duration = workoutConfig.duration;
    weeklyPlan.preferences = workoutConfig.preferences;
    this.userData.saveWorkoutPlan(weeklyPlan);
    weeklyPlan = await this.fillInExcerciseData(weeklyPlan!);
    return weeklyPlan;
  }

  determineSplit(
    daysPerWeek: number,
    goal: Goal,
    preferences: Preference[]
  ): { day: string; muscleGroups: MuscleGroup[] }[] {
    if (daysPerWeek === 3) {
      return [
        { day: 'Day 1', muscleGroups: ['chest', 'back', 'legs'] },
        { day: 'Day 2', muscleGroups: ['arms', 'upper body', 'core'] },
        { day: 'Day 3', muscleGroups: ['all'] },
      ];
    } else if (daysPerWeek === 4) {
      return [
        { day: 'Day 1', muscleGroups: ['chest', 'back'] },
        { day: 'Day 2', muscleGroups: ['legs'] },
        { day: 'Day 3', muscleGroups: ['arms', 'upper body'] },
        { day: 'Day 4', muscleGroups: ['core', 'all'] },
      ];
    } else if (daysPerWeek === 5) {
      return [
        { day: 'Day 1', muscleGroups: ['chest'] },
        { day: 'Day 2', muscleGroups: ['back'] },
        { day: 'Day 3', muscleGroups: ['legs'] },
        { day: 'Day 4', muscleGroups: ['arms', 'upper body'] },
        { day: 'Day 5', muscleGroups: ['core'] },
      ];
    } else if (daysPerWeek === 6) {
      return [
        { day: 'Day 1', muscleGroups: ['chest'] },
        { day: 'Day 2', muscleGroups: ['back'] },
        { day: 'Day 3', muscleGroups: ['legs'] },
        { day: 'Day 4', muscleGroups: ['arms'] },
        { day: 'Day 5', muscleGroups: ['upper body'] },
        { day: 'Day 6', muscleGroups: ['core'] },
      ];
    } else {
      return [{ day: 'custom split', muscleGroups: ['all'] }];
    }
  }

  selectExercises(
    goal: Goal,
    fitnessLevel: string,
    equipment: Equipment[],
    focusAreas: FocusArea[],
    preferences: Preference[]
  ): Exercise[] {
    // Placeholder for exercise selection
    // Normally, you'd filter from a database of exercises based on parameters
    const exerciseDatabase: Exercise[] = this.workoutData.getAllWorkouts();

    const allMuscles = this.muscleGroupService
      .getMuscleGroups()
      .filter((muscleGroup) =>
        focusAreas.includes(muscleGroup.key as FocusArea)
      )
      .flatMap((muscleGroup) => muscleGroup.values);

    // Filter exercises based on equipment and muscle focus areas
    var filteredExercises = exerciseDatabase.filter((exercise) => {
      return (
        equipment.includes(exercise.equipment as Equipment) &&
        allMuscles.includes(exercise.primaryMuscles![0])
      );
    });
    return filteredExercises;
  }

  createWorkoutSchedule(
    workoutSplit: { day: string; muscleGroups: MuscleGroup[] }[],
    exercises: Exercise[],
    fitnessLevel: FitnessLevel,
    goal: Goal,
    duration: number
  ): WorkoutDay[] {
    const workoutSchedule: WorkoutDay[] = [];

    var muscleGroups = this.muscleGroupService.getMuscleGroups();

    workoutSplit.forEach((split) => {
      const dailyExercises = this.getRandomExercises(
        exercises,
        split.muscleGroups,
        4
      );
      const dailyExerciseids = dailyExercises.map((exercise) => exercise.id).filter((id): id is string => id !== undefined);

      workoutSchedule.push({
        day: split.day,
        muscleGroups: split.muscleGroups,
        exercises: dailyExercises,
        exerciseIds: dailyExerciseids,
        sets: this.determineSets(goal, fitnessLevel),
        reps: this.determineReps(goal, fitnessLevel),
        rest: this.determineRest(goal, fitnessLevel),
      });
    });

    return workoutSchedule;
  }

  getRandomExercises(
    exercises: Exercise[],
    muscleGroups: MuscleGroup[],
    count: number
  ): Exercise[] {
    const allMuscles = this.muscleGroupService
      .getMuscleGroups()
      .filter((muscleGroup) =>
        muscleGroups.includes(muscleGroup.key as FocusArea)
      )
      .flatMap((muscleGroup) => muscleGroup.values);

    const filteredExercises = exercises.filter((exercise) =>
      allMuscles.includes(exercise.primaryMuscles![0] as MuscleGroup)
    );
    const shuffledExercises = filteredExercises.sort(() => 0.5 - Math.random());
    return shuffledExercises.slice(0, count);
  }

  determineSets(goal: Goal, fitnessLevel: FitnessLevel): number {
    // Example logic for sets based on goal
    if (goal === 'Lose Weight') {
      return fitnessLevel === 'beginner' ? 5 : 6;
    } else if (goal === 'Build Muscle') {
      return fitnessLevel === 'beginner' ? 4 : 5;
    } else if (goal === 'Stay Fit') {
      return 3;
    }
    // Add more conditions
    return 3;
  }

  determineReps(goal: Goal, fitnessLevel: FitnessLevel): number {
    // Example logic for reps based on goal
    if (goal === 'Lose Weight') {
      return 12;
    } else if (goal === 'Build Muscle') {
      return 8;
    }
    // Add more conditions
    return 10;
  }

  determineRest(goal: Goal, fitnessLevel: FitnessLevel): string {
    // Example logic for rest based on goal
    if (goal === 'Lose Weight') {
      return '60-90 seconds';
    } else if (goal === 'Build Muscle') {
      return '2-3 minutes';
    }
    // Add more conditions
    return '60 seconds';
  }

  generateWeeklyPlan(workoutSchedule: WorkoutDay[]): WorkoutPlan {
    // Format the weekly workout plan for output
    var workoutDays = workoutSchedule.map((dayPlan) => {
      return {
        ...dayPlan,
        exercises: dayPlan.exercises.map((ex) => ex),
      };
    });
    return {
      days: workoutDays,
    };
  }
}

export { WorkoutPlanner };
