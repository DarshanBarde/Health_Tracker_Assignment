import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AddUserWorkoutComponent } from './add-user-workout.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

describe('AddUserWorkoutComponent', () => {
  let component: AddUserWorkoutComponent;
  let fixture: ComponentFixture<AddUserWorkoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddUserWorkoutComponent, FormsModule, CommonModule] // Import necessary modules
    }).compileComponents();

    fixture = TestBed.createComponent(AddUserWorkoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize default values', () => {
    expect(component.userName).toBe('');
    expect(component.workoutType).toBe('');
    expect(component.workoutMinutes).toBeNull();
    expect(component.workoutTypes.length).toBeGreaterThan(0);
  });

  it('should not save workout if any field is missing', () => {
    spyOn(window, 'alert');
    component.userName = '';
    component.workoutType = 'Running';
    component.workoutMinutes = 30;
    
    component.saveWorkout();
    
    expect(window.alert).toHaveBeenCalledWith('Please fill all the fields!');
  });

  it('should save workout when all fields are filled', () => {
    spyOn(window, 'alert');
    spyOn(localStorage, 'setItem');

    component.userName = 'John';
    component.workoutType = 'Running';
    component.workoutMinutes = 30;

    component.saveWorkout();

    expect(localStorage.setItem).toHaveBeenCalled();
    expect(window.alert).toHaveBeenCalledWith('Workout saved successfully! :)');
    expect(component.userName).toBe('');
    expect(component.workoutType).toBe('');
    expect(component.workoutMinutes).toBeNull();
  });
});
