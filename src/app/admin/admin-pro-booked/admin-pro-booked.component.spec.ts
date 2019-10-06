import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminProBookedComponent } from './admin-pro-booked.component';

describe('AdminProBookedComponent', () => {
  let component: AdminProBookedComponent;
  let fixture: ComponentFixture<AdminProBookedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminProBookedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminProBookedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
