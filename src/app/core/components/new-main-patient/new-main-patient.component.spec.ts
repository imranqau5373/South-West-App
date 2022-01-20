import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewMainPatientComponent } from './new-main-patient.component';

describe('NewMainPatientComponent', () => {
  let component: NewMainPatientComponent;
  let fixture: ComponentFixture<NewMainPatientComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewMainPatientComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewMainPatientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
