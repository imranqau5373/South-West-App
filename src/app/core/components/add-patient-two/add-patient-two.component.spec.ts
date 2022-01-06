import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddPatientTwoComponent } from './add-patient-two.component';

describe('AddPatientTwoComponent', () => {
  let component: AddPatientTwoComponent;
  let fixture: ComponentFixture<AddPatientTwoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddPatientTwoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddPatientTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
