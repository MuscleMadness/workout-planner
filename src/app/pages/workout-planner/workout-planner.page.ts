import { Component, OnInit } from '@angular/core';
import {
  Equipment,
  FitnessLevel,
  FocusArea,
  Goal,
  Preference,
  WorkoutDay,
  WorkoutPlan,
  WorkoutPlanner,
} from '../../providers/workout-planner';
import { WorkoutData } from 'src/app/providers/workout-data';
import Exercise from 'src/app/models/Excercise';

@Component({
  selector: 'app-workout-planner',
  templateUrl: './workout-planner.page.html',
  styleUrls: ['./workout-planner.page.scss'],
})
export class WorkoutPlannerPage implements OnInit {
  workoutPlan?: WorkoutPlan;

  constructor(
    public workoutPlanner: WorkoutPlanner,
    public workoutData: WorkoutData
  ) {}

  ngOnInit() {
    this.workoutData.loadWorkOuts().subscribe((data: Exercise[]) => {
      this.reloadWorkoutPlan();
    });
  }

  reloadWorkoutPlan() {
    const goal: Goal = 'Muscle Growth';
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

    this.workoutPlanner
      .generateWorkoutPlan(
        goal,
        fitnessLevel,
        daysPerWeek,
        equipment,
        focusAreas,
        duration,
        preferences
      )
      .then((workoutPlan) => {
        this.workoutPlan = workoutPlan;

        console.log('Returning cached workout plan:', this.workoutPlan);
        console.log(this.workoutPlan.days[0].exercises[0]);
        console.log(this.workoutPlan.days[0].exercises[0].images![0]);
        console.log(this.workoutPlan.days[0].exercises[0].thumbnail);
        var images = this.workoutPlan.days[0].exercises[0].images;
        console.log(
          images && images.length > 0 ? 'assets/exercises/' + images[0] : null
        );
      });
  }
}
