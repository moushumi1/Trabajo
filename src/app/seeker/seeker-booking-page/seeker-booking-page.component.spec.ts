import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SeekerBookingPageComponent } from './seeker-booking-page.component';

describe('SeekerBookingPageComponent', () => {
  let component: SeekerBookingPageComponent;
  let fixture: ComponentFixture<SeekerBookingPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SeekerBookingPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SeekerBookingPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
