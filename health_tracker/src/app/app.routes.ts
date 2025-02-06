import { Routes } from '@angular/router';
import { AddUserWorkoutComponent } from './add-user-workout/add-user-workout.component';
import { UserWorkoutsComponent } from './user-workouts/user-workouts.component';
import { ChartwiseRepComponent } from './chartwise-rep/chartwise-rep.component';

export const routes: Routes = [
    { path: 'add-user-workout', component: AddUserWorkoutComponent },
    { path: 'user-workouts', component: UserWorkoutsComponent },
    { path: 'chartwise-rep', component: ChartwiseRepComponent},
  { path: '', redirectTo: '/add-user-workout', pathMatch: 'full' } 
];
