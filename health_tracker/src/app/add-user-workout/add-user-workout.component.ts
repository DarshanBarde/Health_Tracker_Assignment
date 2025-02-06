import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common'; // ✅ Import CommonModule for *ngFor

@Component({
  selector: 'app-add-user-workout',
  standalone: true,
  imports: [FormsModule, CommonModule], // ✅ Add CommonModule here
  templateUrl: './add-user-workout.component.html',
  styleUrl: './add-user-workout.component.scss'
})
export class AddUserWorkoutComponent {
  userName: string = '';
  workoutType: string = '';
  workoutMinutes: number | null = null;

  // List of workout types for the dropdown
  workoutTypes: string[] = ['Gym', 'Cycling', 'Running', 'Walking', 'Skipping', 'Sprinting'];

  saveWorkout() { 
    if (!this.userName || !this.workoutType || this.workoutMinutes === null) {
      alert('Please fill all the fields!');
      return;
    }

    const workout = {
      userName: this.userName,
      workoutType: this.workoutType,
      workoutMinutes: this.workoutMinutes
    };
    let workouts = JSON.parse(localStorage.getItem('workouts') || '[]');

    workouts.push(workout);
    localStorage.setItem('workouts', JSON.stringify(workouts));

    this.userName = '';
    this.workoutType = '';
    this.workoutMinutes = null;

    alert('Workout saved successfully! :)');
  }
}
