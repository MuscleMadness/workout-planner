import { Component } from '@angular/core';
import {
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonItem,
  IonLabel,
  IonSelectOption,
  IonSelect,
  SelectChangeEventDetail,
} from '@ionic/angular/standalone';
import { ExploreContainerComponent } from '../../components/explore-container/explore-container.component';
import { ExcercisesService } from 'src/services/excercises.service';
import Excercise from 'src/models/Excercise';
import { WorkoutListComponent } from '../../components/workout-list/workout-list.component';
import { ChangeDetectorRef } from '@angular/core';
import { IonSelectCustomEvent } from '@ionic/core';
import Exercise from 'src/models/Excercise';

@Component({
  selector: 'app-workout',
  templateUrl: 'workout.page.html',
  styleUrls: ['workout.page.scss'],
  standalone: true,
  imports: [
    IonLabel,
    IonSelect,
    IonSelectOption,
    IonItem,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    ExploreContainerComponent,
    WorkoutListComponent,
  ],
})
export class Tab1Page {
  workouts: Excercise[] = [];
  majorGroupsBasic: { [key: string]: string[] } = {
    all: [
      'abdominals',
      'hamstrings',
      'adductors',
      'quadriceps',
      'calves',
      'glutes',
      'abductors',
      'biceps',
      'triceps',
      'forearms',
      'shoulders',
      'traps',
      'neck',
      'middle back',
      'lower back',
      'lats',
      'chest',
    ],
    core: ['abdominals'],
    legs: [
      'hamstrings',
      'adductors',
      'quadriceps',
      'calves',
      'glutes',
      'abductors',
    ],
    arms: ['biceps', 'triceps', 'forearms'],
    'upper body': ['shoulders', 'traps', 'neck'],
    back: ['middle back', 'lower back', 'lats'],
    chest: ['chest'],
  };

  muscleGroupsAdvanced: string[] = [
    'abdominals',
    'hamstrings',
    'adductors',
    'quadriceps',
    'biceps',
    'shoulders',
    'chest',
    'middle back',
    'calves',
    'glutes',
    'lower back',
    'lats',
    'triceps',
    'traps',
    'forearms',
    'neck',
    'abductors',
  ];
  majorGroupsNames: string[] = [];
  filteredWorkouts: Exercise[] = [];
  constructor(
    private excerciseService: ExcercisesService,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit() {
    this.workouts = this.excerciseService.getAllExcercises();
    this.filteredWorkouts = this.workouts;
    this.majorGroupsNames = Object.keys(this.majorGroupsBasic);
    console.log(this.filteredWorkouts[0]);
    this.cdr.detectChanges();
  }

  handleChange($event: IonSelectCustomEvent<SelectChangeEventDetail<any>>) {
    const muscleGroup = $event.detail.value;
    if (muscleGroup === 'all') {
      this.filteredWorkouts = this.workouts;
    } else {
      this.filteredWorkouts = this.workouts.filter((workout) =>
        this.majorGroupsBasic[muscleGroup].includes(workout.primaryMuscles[0])
      );
    }
    this.cdr.detectChanges();
  }
}
