import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SeekerReviewComponent } from './seeker-review.component';

describe('SeekerReviewComponent', () => {
  let component: SeekerReviewComponent;
  let fixture: ComponentFixture<SeekerReviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SeekerReviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SeekerReviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
