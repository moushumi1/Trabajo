import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SeekerReviewListComponent } from './seeker-review-list.component';

describe('SeekerReviewListComponent', () => {
  let component: SeekerReviewListComponent;
  let fixture: ComponentFixture<SeekerReviewListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SeekerReviewListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SeekerReviewListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
