import { Component, OnInit } from '@angular/core';
import { IonList, IonItem, IonLabel } from '@ionic/angular/standalone';
import { NgModule } from '@angular/core';
import Excercise from 'src/models/Excercise';
import { ExcercisesService } from 'src/services/excercises.service';

@Component({
  selector: 'app-workout-list',
  standalone: true,
  templateUrl: './workout-list.component.html',
  styleUrls: ['./workout-list.component.scss'],
  imports: [IonLabel, IonItem, IonList],
})
export class WorkoutListComponent implements OnInit {
  workouts: Excercise[] = [];
  constructor(private excerciseService: ExcercisesService) {}

  ngOnInit() {
    this.workouts = this.excerciseService.getAllExcercises();
    console.log(this.workouts[0]);
  }
}
