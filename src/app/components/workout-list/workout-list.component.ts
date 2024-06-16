import { ChangeDetectorRef, Component, Input, OnInit } from '@angular/core';
import {
  IonList,
  IonItem,
  IonLabel,
  IonSelect,
  IonSelectOption,
} from '@ionic/angular/standalone';
import { NgModule } from '@angular/core';
import Excercise from 'src/models/Excercise';
import { ExcercisesService } from 'src/services/excercises.service';

@Component({
  selector: 'workout-list',
  standalone: true,
  templateUrl: './workout-list.component.html',
  styleUrls: ['./workout-list.component.scss'],
  imports: [IonLabel, IonItem, IonList, IonSelect, IonSelectOption],
})
export class WorkoutListComponent implements OnInit {
  @Input() workouts: Excercise[] = [];
  constructor(private cdr: ChangeDetectorRef) {}

  ngOnInit() {}

  ngOnChanges() {
    this.cdr.detectChanges();
  }
}
