import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddPatientThreeComponent } from './add-patient-three.component';

describe('AddPatientThreeComponent', () => {
  let component: AddPatientThreeComponent;
  let fixture: ComponentFixture<AddPatientThreeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddPatientThreeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddPatientThreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
