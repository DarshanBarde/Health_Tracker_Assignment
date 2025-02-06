import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddUserWorkoutComponent } from './add-user-workout.component';

describe('AddUserWorkoutComponent', () => {
  let component: AddUserWorkoutComponent;
  let fixture: ComponentFixture<AddUserWorkoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddUserWorkoutComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddUserWorkoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
