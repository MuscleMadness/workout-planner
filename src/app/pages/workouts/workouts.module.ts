import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import { ScrollingModule } from '@angular/cdk/scrolling'

import { WorkoutsPageRoutingModule } from './workouts-routing.module';

import { WorkoutsPage } from './workouts.page';
import { WorkoutFilterComponent } from '../workout-filter/workout-filter.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ScrollingModule,
    WorkoutsPageRoutingModule
  ],
  declarations: [WorkoutsPage, WorkoutFilterComponent],
})
export class WorkoutsPageModule {}
