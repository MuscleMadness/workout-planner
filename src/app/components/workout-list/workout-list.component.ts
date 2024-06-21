import { ChangeDetectorRef, Component, Input, OnInit } from '@angular/core';
import {
  IonList,
  IonItem,
  IonLabel,
  IonSelect,
  IonSelectOption,
  IonThumbnail,
} from '@ionic/angular/standalone';
import { NgModule } from '@angular/core';
import Excercise from 'src/models/Excercise';
import { ExcercisesService } from 'src/services/excercises.service';
import { MaterialModule } from '../../material.module';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'workout-list',
  standalone: true,
  templateUrl: './workout-list.component.html',
  styleUrls: ['./workout-list.component.scss'],
  imports: [
    IonLabel,
    IonItem,
    IonList,
    IonSelect,
    IonSelectOption,
    MaterialModule,
    IonThumbnail,
    IonicModule,
  ],
})
export class WorkoutListComponent implements OnInit {
  @Input() workouts: Excercise[] = [];
  constructor(private cdr: ChangeDetectorRef) {}

  ngOnInit() {}

  ngOnChanges() {
    console.log(this.workouts[0].thumbnail);
    // console.log(this.workouts[0].images![0]);
    this.cdr.detectChanges();
  }
}
