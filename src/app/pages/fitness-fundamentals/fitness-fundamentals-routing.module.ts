import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FitnessFundamentalsPage } from './fitness-fundamentals.page';

const routes: Routes = [
  {
    path: '',
    component: FitnessFundamentalsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FitnessFundamentalsPageRoutingModule {}
