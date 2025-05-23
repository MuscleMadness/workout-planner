import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { checkTutorialGuard } from './providers/check-tutorial.guard';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/tutorial',
    pathMatch: 'full',
  },
  {
    path: 'account',
    loadChildren: () =>
      import('./pages/account/account.module').then((m) => m.AccountModule),
  },
  {
    path: 'login',
    loadChildren: () =>
      import('./pages/login/login.module').then((m) => m.LoginModule),
  },
  {
    path: 'signup',
    loadChildren: () =>
      import('./pages/signup/signup.module').then((m) => m.SignUpModule),
  },
  {
    path: 'app',
    loadChildren: () =>
      import('./pages/tabs-page/tabs-page.module').then((m) => m.TabsModule),
  },
  {
    path: 'tutorial',
    loadChildren: () =>
      import('./pages/tutorial/tutorial.module').then((m) => m.TutorialModule),
    canMatch: [checkTutorialGuard],
  },
  {
    path: 'workouts',
    loadChildren: () =>
      import('./pages/workouts/workouts.module').then(
        (m) => m.WorkoutsPageModule
      ),
  },
  {
    path: 'app/tabs/workouts/:workoutId',
    loadChildren: () =>
      import('./pages/workout-detail/workout-detail.module').then(
        (m) => m.WorkoutDetailPageModule
      ),
  },
  {
    path: 'workout-planner',
    loadChildren: () =>
      import('./pages/workout-planner/workout-planner.module').then(
        (m) => m.WorkoutPlannerPageModule
      ),
  },
  {
    path: 'nutrients',
    loadChildren: () =>
      import('./pages/nutrients/nutrients.module').then(
        (m) => m.NutrientsPageModule
      ),
  },
  {
    path: 'about',
    loadChildren: () =>
      import('./pages/about/about.module').then((m) => m.AboutModule),
  },
  {
    path: 'muscle-group',
    loadChildren: () =>
      import('./pages/muscle-group/muscle-group.module').then(
        (m) => m.MuscleGroupPageModule
      ),
  },
  {
    path: 'settings',
    loadChildren: () =>
      import('./pages/settings/settings.module').then(
        (m) => m.SettingsPageModule
      ),
  },
  {
    path: 'equipments',
    loadChildren: () =>
      import('./pages/equipments/equipments.module').then(
        (m) => m.EquipmentsPageModule
      ),
  },
  {
    path: 'equipments/:id',
    loadChildren: () =>
      import('./pages/equipment-detail/equipment-detail.module').then(
        (m) => m.EquipmentDetailPageModule
      ),
  },
  {
    path: 'fitness-fundamentals',
    loadChildren: () =>
      import('./pages/fitness-fundamentals/fitness-fundamentals.module').then(
        (m) => m.FitnessFundamentalsPageModule
      ),
  },
  {
    path: 'membership',
    loadChildren: () =>
      import('./pages/membership/membership.module').then(
        (m) => m.MembershipPageModule
      ),
  },
  {
    path: 'register-user',
    loadChildren: () =>
      import('./pages/register-user/register-user.module').then(
        (m) => m.RegisterUserPageModule
      ),
  },
  {
    path: 'dashboard',
    loadChildren: () =>
      import('./pages/dashboard/dashboard.module').then(
        (m) => m.DashboardPageModule
      ),
  },
  {
    path: 'user-list',
    loadChildren: () => import('./users/user-list/user-list.module').then( m => m.UserListPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
