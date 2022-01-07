import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetAllNewpatientsComponent } from './get-all-newpatients.component';

describe('GetAllNewpatientsComponent', () => {
  let component: GetAllNewpatientsComponent;
  let fixture: ComponentFixture<GetAllNewpatientsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetAllNewpatientsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GetAllNewpatientsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
