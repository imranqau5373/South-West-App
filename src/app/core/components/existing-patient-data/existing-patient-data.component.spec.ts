import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExistingPatientDataComponent } from './existing-patient-data.component';

describe('ExistingPatientDataComponent', () => {
  let component: ExistingPatientDataComponent;
  let fixture: ComponentFixture<ExistingPatientDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExistingPatientDataComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExistingPatientDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
