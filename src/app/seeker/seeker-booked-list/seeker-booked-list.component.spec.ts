import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SeekerBookedListComponent } from './seeker-booked-list.component';

describe('SeekerBookedListComponent', () => {
  let component: SeekerBookedListComponent;
  let fixture: ComponentFixture<SeekerBookedListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SeekerBookedListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SeekerBookedListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
