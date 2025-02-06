import { TestBed } from '@angular/core/testing';
import { WorkoutService } from './workout.service';

describe('WorkoutService', () => {
  let service: WorkoutService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WorkoutService);
    localStorage.clear(); // Clear storage before each test
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return an empty array if no workouts exist', () => {
    expect(service.getWorkouts()).toEqual([]);
  });

  it('should save a workout to localStorage', () => {
    const workout = { userName: 'John', workoutType: 'Running', workoutMinutes: 30 };
    service.saveWorkout(workout);
    
    expect(service.getWorkouts().length).toBe(1);
    expect(service.getWorkouts()[0]).toEqual(workout);
  });

  it('should retrieve workouts from localStorage', () => {
    const workouts = [
      { userName: 'Alice', workoutType: 'Cycling', workoutMinutes: 45 },
      { userName: 'Bob', workoutType: 'Gym', workoutMinutes: 60 }
    ];
    localStorage.setItem('workouts', JSON.stringify(workouts));

    expect(service.getWorkouts()).toEqual(workouts);
  });
});

