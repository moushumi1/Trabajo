import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProviderBookedSeekerComponent } from './provider-booked-seeker.component';

describe('ProviderBookedSeekerComponent', () => {
  let component: ProviderBookedSeekerComponent;
  let fixture: ComponentFixture<ProviderBookedSeekerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProviderBookedSeekerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProviderBookedSeekerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
