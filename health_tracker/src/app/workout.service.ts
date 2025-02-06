import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WorkoutService {
  getWorkouts(): any[] {
    return JSON.parse(localStorage.getItem('workouts') || '[]');
  }

  saveWorkout(workout: any) {
    let workouts = this.getWorkouts();
    workouts.push(workout);
    localStorage.setItem('workouts', JSON.stringify(workouts));
  }
}

