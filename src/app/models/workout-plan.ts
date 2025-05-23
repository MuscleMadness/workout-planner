import Exercise from './Excercise';

type Goal = 'Lose Weight' | 'Build Muscle' | 'Stay Fit';
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
  exerciseIds: string[];
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
  metaData?: MetaData;
  createdDate?: string;
}

interface MetaData {
  coachName: string;
  gymName: string;
  gymLogoUrl: string;
  gymAddress: string;
  planName: string;
  planDescription: string;
  planNotes: string;
}

interface WorkoutPlanConfig {
  goal: Goal;
  fitnessLevel: FitnessLevel;
  daysPerWeek: number;
  equipment: Equipment[];
  focusAreas: FocusArea[];
  duration: number;
  preferences: Preference[];
}

export {
  Goal,
  FitnessLevel,
  Equipment,
  MuscleGroup,
  FocusArea,
  Preference,
  WorkoutDay,
  WorkoutPlan,
  WorkoutPlanConfig,
};
