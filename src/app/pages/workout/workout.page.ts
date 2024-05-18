import { Component } from '@angular/core';
import {
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
} from '@ionic/angular/standalone';
import { ExploreContainerComponent } from '../../components/explore-container/explore-container.component';
import { ExcercisesService } from 'src/services/excercises.service';
import Excercise from 'src/models/Excercise';
import { WorkoutListComponent } from '../../components/workout-list/workout-list.component';

@Component({
  selector: 'app-workout',
  templateUrl: 'workout.page.html',
  styleUrls: ['workout.page.scss'],
  standalone: true,
  imports: [
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
  constructor(private excerciseService: ExcercisesService) {}

  ngOnInit() {
    this.workouts = this.excerciseService.getAllExcercises();
    console.log(this.workouts[0]);
  }
}
