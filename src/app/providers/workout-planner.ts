import { Injectable } from '@angular/core';
import Exercise from '../models/Excercise';
import { WorkoutData } from './workout-data';
import { MuscleGroupService } from '../services/muscle-group-service.service';
import { UserData } from './user-data';

type Goal = 'Muscle Growth' | 'Strength' | 'Endurance';
type FitnessLevel = 'beginner' | 'intermediate' | 'expert';
type Equipment =
  | 'body only'
  | 'machine'
  | 'other'
  | 'foam roll'
  | 'Cardio'
  | 'kettlebells'
  | 'dumbbell'
  | 'cable'
  | 'barbell'
  | 'bands'
  | 'medicine ball'
  | 'exercise ball'
  | 'e-z curl bar';
type MuscleGroup =
  | 'all'
  | 'chest'
  | 'legs'
  | 'back'
  | 'arms'
  | 'upper body'
  | 'core';
type FocusArea = MuscleGroup;
type Preference = 'compound' | 'isolation';

interface WorkoutDay {
  day: string;
  muscleGroups: MuscleGroup[];
  exercises: Exercise[];
  sets: number;
  reps: number;
  rest: string;
}

interface WorkoutPlan {
  days: WorkoutDay[];
  goal?: Goal;
  fitnessLevel?: FitnessLevel;
  daysPerWeek?: number;
  equipment?: Equipment[];
  focusAreas?: FocusArea[];
  duration?: number;
  preferences?: Preference[];
}

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
      console.log('initialize workout data');
    });
  }
  async generateWorkoutPlan(
    goal: Goal,
    fitnessLevel: FitnessLevel,
    daysPerWeek: number,
    equipment: Equipment[],
    focusAreas: FocusArea[],
    duration: number,
    preferences: Preference[]
  ): Promise<WorkoutPlan> {
    // Load from cache if there is a previous workout plan for the same parameters
    const cachedWorkoutPlan = await this.userData.getWorkoutPlan();
    if (cachedWorkoutPlan !== null) {
      return cachedWorkoutPlan;
    }

    // 1. Determine workout split
    const workoutSplit = this.determineSplit(daysPerWeek, goal, preferences);

    // 2. Select exercises based on goal, equipment, and focus areas
    const exercises = this.selectExercises(
      goal,
      fitnessLevel,
      equipment,
      focusAreas,
      preferences
    );

    console.log('selected ', exercises.length, ' exercises');

    // 3. Create the weekly workout schedule
    const workoutSchedule = this.createWorkoutSchedule(
      workoutSplit,
      exercises,
      fitnessLevel,
      goal,
      duration
    );

    // 4. Generate and return the workout plan
    var weeklyPlan = this.generateWeeklyPlan(workoutSchedule);

    // 5. persist the workout plan
    weeklyPlan.goal = goal;
    weeklyPlan.fitnessLevel = fitnessLevel;
    weeklyPlan.daysPerWeek = daysPerWeek;
    weeklyPlan.equipment = equipment;
    weeklyPlan.focusAreas = focusAreas;
    weeklyPlan.duration = duration;
    weeklyPlan.preferences = preferences;
    console.log('Generated workout plan:', weeklyPlan);
    this.userData.saveWorkoutPlan(weeklyPlan);
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

    console.log('Focus Areas:', focusAreas);
    console.log('All Muscles:', allMuscles);

    // Example logic to filter exercises
    var filteredExercises = exerciseDatabase.filter((exercise) => {
      return (
        equipment.includes(exercise.equipment as Equipment) &&
        allMuscles.includes(exercise.primaryMuscles![0])
      );
    });
    console.log('Filtered Exercises:', filteredExercises.length);
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
      workoutSchedule.push({
        day: split.day,
        muscleGroups: split.muscleGroups,
        exercises: dailyExercises,
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
    if (goal === 'Muscle Growth') {
      return fitnessLevel === 'beginner' ? 3 : 4;
    } else if (goal === 'Strength') {
      return fitnessLevel === 'beginner' ? 4 : 5;
    }
    // Add more conditions
    return 3;
  }

  determineReps(goal: Goal, fitnessLevel: FitnessLevel): number {
    // Example logic for reps based on goal
    if (goal === 'Muscle Growth') {
      return 8;
    } else if (goal === 'Strength') {
      return 6;
    }
    // Add more conditions
    return 10;
  }

  determineRest(goal: Goal, fitnessLevel: FitnessLevel): string {
    // Example logic for rest based on goal
    if (goal === 'Muscle Growth') {
      return '60-90 seconds';
    } else if (goal === 'Strength') {
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

export {
  WorkoutPlanner,
  Goal,
  FitnessLevel,
  Equipment,
  MuscleGroup,
  FocusArea,
  Preference,
  WorkoutDay,
  WorkoutPlan,
};
