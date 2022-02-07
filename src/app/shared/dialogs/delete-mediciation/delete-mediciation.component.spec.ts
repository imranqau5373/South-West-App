import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteMediciationComponent } from './delete-mediciation.component';

describe('DeleteMediciationComponent', () => {
  let component: DeleteMediciationComponent;
  let fixture: ComponentFixture<DeleteMediciationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeleteMediciationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteMediciationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
