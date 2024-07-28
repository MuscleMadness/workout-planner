import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { WorkoutsPageRoutingModule } from './workouts-routing.module';

import { WorkoutsPage } from './workouts.page';
import { WorkoutFilterComponent } from '../workout-filter/workout-filter.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    WorkoutsPageRoutingModule
  ],
  declarations: [WorkoutsPage, WorkoutFilterComponent],
})
export class WorkoutsPageModule {}
