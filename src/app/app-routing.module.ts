import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { checkTutorialGuard } from './providers/check-tutorial.guard';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/tutorial',
    pathMatch: 'full'
  },
  {
    path: 'account',
    loadChildren: () => import('./pages/account/account.module').then(m => m.AccountModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then(m => m.LoginModule)
  },
  {
    path: 'signup',
    loadChildren: () => import('./pages/signup/signup.module').then(m => m.SignUpModule)
  },
  {
    path: 'app',
    loadChildren: () => import('./pages/tabs-page/tabs-page.module').then(m => m.TabsModule)
  },
  {
    path: 'tutorial',
    loadChildren: () => import('./pages/tutorial/tutorial.module').then(m => m.TutorialModule),
    canMatch: [checkTutorialGuard]
  },
  {
    path: 'workouts',
    loadChildren: () => import('./pages/workouts/workouts.module').then( m => m.WorkoutsPageModule)
  },
  {
    path: 'app/tabs/workouts/:workoutId',
    loadChildren: () => import('./pages/workout-detail/workout-detail.module').then( m => m.WorkoutDetailPageModule)
  },
  {
    path: 'workout-planner',
    loadChildren: () => import('./pages/workout-planner/workout-planner.module').then( m => m.WorkoutPlannerPageModule)
  },
  {
    path: 'nutrients',
    loadChildren: () => import('./pages/nutrients/nutrients.module').then( m => m.NutrientsPageModule)
  },
  {
    path: 'about',
    loadChildren: () => import('./pages/about/about.module').then( m => m.AboutModule)
  },  {
    path: 'muscle-group',
    loadChildren: () => import('./pages/muscle-group/muscle-group.module').then( m => m.MuscleGroupPageModule)
  },
  {
    path: 'settings',
    loadChildren: () => import('./pages/settings/settings.module').then( m => m.SettingsPageModule)
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
