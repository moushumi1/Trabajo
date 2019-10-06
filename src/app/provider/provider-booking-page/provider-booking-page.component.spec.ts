import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProviderBookingPageComponent } from './provider-booking-page.component';

describe('ProviderBookingPageComponent', () => {
  let component: ProviderBookingPageComponent;
  let fixture: ComponentFixture<ProviderBookingPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProviderBookingPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProviderBookingPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
