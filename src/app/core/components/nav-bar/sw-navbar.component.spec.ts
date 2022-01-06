import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SwNavbarComponent } from './sw-navbar.component';

describe('SwNavbarComponent', () => {
  let component: SwNavbarComponent;
  let fixture: ComponentFixture<SwNavbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SwNavbarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SwNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
