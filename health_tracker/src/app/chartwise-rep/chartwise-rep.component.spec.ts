import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChartwiseRepComponent } from './chartwise-rep.component';

describe('ChartwiseRepComponent', () => {
  let component: ChartwiseRepComponent;
  let fixture: ComponentFixture<ChartwiseRepComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChartwiseRepComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChartwiseRepComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
