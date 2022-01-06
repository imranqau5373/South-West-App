import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddPatientOneComponent } from './add-patient-one.component';

describe('AddPatientOneComponent', () => {
  let component: AddPatientOneComponent;
  let fixture: ComponentFixture<AddPatientOneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddPatientOneComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddPatientOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
