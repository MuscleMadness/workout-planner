import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WorkoutPlannerPage } from './workout-planner.page';

const routes: Routes = [
  {
    path: '',
    component: WorkoutPlannerPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WorkoutPlannerPageRoutingModule {}
