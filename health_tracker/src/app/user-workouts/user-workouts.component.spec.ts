import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserWorkoutsComponent } from './user-workouts.component';

describe('UserWorkoutsComponent', () => {
  let component: UserWorkoutsComponent;
  let fixture: ComponentFixture<UserWorkoutsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UserWorkoutsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserWorkoutsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
