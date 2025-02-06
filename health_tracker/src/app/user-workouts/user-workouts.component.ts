import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { isPlatformBrowser } from '@angular/common';
import { Inject, PLATFORM_ID } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-user-workouts',
  imports: [CommonModule,FormsModule
  ],
  standalone: true,
  templateUrl: './user-workouts.component.html',
  styleUrl: './user-workouts.component.scss',
  providers: [],
})
export class UserWorkoutsComponent {
  workouts: any[] = [];
  memoryStorage: any[] = [];
  filterName: string = '';  
  filterType: string = '';  
  pageSize: number = 5;     
  currentPage: number = 1; 

  constructor(@Inject(PLATFORM_ID) private platformId: object) {
    if (isPlatformBrowser(this.platformId)) {
      this.loadWorkouts();
    }
  }

  loadWorkouts() {
    if (isPlatformBrowser(this.platformId)) {
      try {
        this.workouts = JSON.parse(localStorage.getItem('workouts') || '[]');
      } catch (error) {
        console.warn('localStorage is not available, using in-memory storage.');
        this.workouts = this.memoryStorage;
      }
    }
  }

  saveWorkout(workout: any) {
    if (isPlatformBrowser(this.platformId)) {
      try {
        let workouts = JSON.parse(localStorage.getItem('workouts') || '[]');
        workouts.push(workout);
        localStorage.setItem('workouts', JSON.stringify(workouts));
      } catch (error) {
        console.warn('localStorage is not available, storing in memory.');
        this.memoryStorage.push(workout);
      }
    }
  }

  clearWorkouts() {
    if (isPlatformBrowser(this.platformId)) {
      try {
        localStorage.removeItem('workouts');
        this.workouts = [];
      } catch (error) {
        console.warn('localStorage is not available, clearing in-memory storage.');
        this.memoryStorage = [];
      }
    }
  }

  get filteredWorkouts() {
    return this.workouts.filter(workout => {
      const nameMatch = workout.userName.toLowerCase().includes(this.filterName.toLowerCase());
      const typeMatch = workout.workoutType.toLowerCase().includes(this.filterType.toLowerCase());
      return nameMatch && typeMatch;
    });
  }

  get pagedWorkouts() {
    const filtered = this.filteredWorkouts;
    const start = (this.currentPage - 1) * this.pageSize;
    const end = start + this.pageSize;
    return filtered.slice(start, end);
  }

  get totalPages() {
    return Math.ceil(this.filteredWorkouts.length / this.pageSize);
  }

  goToPage(page: number) {
    if (page >= 1 && page <= this.totalPages) {
      this.currentPage = page;
    }
  }
}