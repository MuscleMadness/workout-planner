import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MuscleGroupPage } from './muscle-group.page';

const routes: Routes = [
  {
    path: '',
    component: MuscleGroupPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MuscleGroupPageRoutingModule {}
