import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { WorkoutPlannerPageRoutingModule } from './workout-planner-routing.module';

import { WorkoutPlannerPage } from './workout-planner.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    WorkoutPlannerPageRoutingModule
  ],
  declarations: [WorkoutPlannerPage]
})
export class WorkoutPlannerPageModule {}
