import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs-page';
import { WorkoutsPage } from '../workouts/workouts.page';
import { WorkoutPlannerPage } from '../workout-planner/workout-planner.page';
import { NutrientsPage } from '../nutrients/nutrients.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'workouts',
        children: [
          {
            path: '',
            component: WorkoutsPage,
          },
          {
            path: 'workouts/:workoutId',
            loadChildren: () => import('../workout-detail/workout-detail.module').then( m => m.WorkoutDetailPageModule)
          }
        ]
      },
      {
        path: 'workout-planner',
        children: [
          {
            path: '',
            component: WorkoutPlannerPage
          }
        ]
      },            
      {
        path: 'nutrients',
        children: [
          {
            path: '',
            component: NutrientsPage
          }
        ]
      },
      {
        path: '',
        redirectTo: '/app/tabs/workouts',
        pathMatch: 'full'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabsPageRoutingModule { }

