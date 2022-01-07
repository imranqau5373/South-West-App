import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetAllExistingpatientsComponent } from './get-all-existingpatients.component';

describe('GetAllExistingpatientsComponent', () => {
  let component: GetAllExistingpatientsComponent;
  let fixture: ComponentFixture<GetAllExistingpatientsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetAllExistingpatientsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GetAllExistingpatientsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
