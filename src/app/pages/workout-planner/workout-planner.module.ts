import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import { MatButtonToggleModule } from '@angular/material/button-toggle';

import { WorkoutPlannerPageRoutingModule } from './workout-planner-routing.module';

import { WorkoutPlannerPage } from './workout-planner.page';
import { WorkoutPlannerEditorComponent } from '../workout-planner-editor/workout-planner-editor.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MatButtonToggleModule,
    WorkoutPlannerPageRoutingModule
  ],
  declarations: [WorkoutPlannerPage, WorkoutPlannerEditorComponent]
})
export class WorkoutPlannerPageModule {}
