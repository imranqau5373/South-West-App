import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddMediciationComponent } from './add-mediciation.component';

describe('AddMediciationComponent', () => {
  let component: AddMediciationComponent;
  let fixture: ComponentFixture<AddMediciationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddMediciationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddMediciationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
