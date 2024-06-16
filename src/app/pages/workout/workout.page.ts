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
import { MuscleGroup } from 'src/models/MuscleGroup';
import { MuscleGroupService } from 'src/services/musclegroup.sevice';

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
  muscleGroups: MuscleGroup[] = [];
  filteredWorkouts: Exercise[] = [];
  constructor(
    private excerciseService: ExcercisesService,
    private muscleGroupService: MuscleGroupService,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit() {
    this.workouts = this.excerciseService.getAllExcercises();
    this.filteredWorkouts = this.workouts;
    this.muscleGroups = this.muscleGroupService.getMuscleGroups();
    console.log(this.filteredWorkouts[0]);
    this.cdr.detectChanges();
  }

  handleChange(
    $event: IonSelectCustomEvent<SelectChangeEventDetail<MuscleGroup[]>>
  ) {
    const selectedMuscleGroups = $event.detail.value;
    console.log(selectedMuscleGroups);

    const uniqueMuscleGroups = new Set<string>();

    selectedMuscleGroups.forEach((muscleGroup) => {
      console.log(muscleGroup.values);
      muscleGroup.values.forEach((value) => {
        uniqueMuscleGroups.add(value);
      });
    });
    console.log(uniqueMuscleGroups);

    this.filteredWorkouts = this.workouts.filter((workout) => {
      return uniqueMuscleGroups.has(workout.primaryMuscles[0]);
    });

    this.cdr.detectChanges();
  }
}
